import React, { useState } from "react";

import "./App.css";
import Form from "./components/form/Form.jsx";
import Card from "./components/card/Card.jsx";

function App() {
  let cardData = localStorage.getItem("cardData");
  const [card, setCard] = useState(cardData ? JSON.parse(cardData) : []);

  return (
    <div className="app">
      <Form card={card} setCard={setCard} />
      <div className="card-section">
        {card.map((data, index) => (
          <Card
            key={index}
            name={data.name}
            role={data.role}
            description={data.description}
            imageUrl={data.imageUrl}
            setCard={setCard}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
