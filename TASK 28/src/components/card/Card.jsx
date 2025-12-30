import React from "react";
import "./Card.css";

const Card = ({ name, role, description, imageUrl, setCard }) => {
  function deleteHandler() {
    let cardData = localStorage.getItem("cardData");
    if (cardData) {
      let parsedData = JSON.parse(cardData);
      let filteredData = parsedData.filter((card) => card.name !== name);
      localStorage.setItem("cardData", JSON.stringify(filteredData));
      setCard(filteredData);
    }
  }
  return (
    <div className="card">
      <img src={imageUrl} alt="" />
      <h2>{name}</h2>
      <p>{role}</p>
      <h4>{description}</h4>
      <button onClick={deleteHandler}>Remove</button>
    </div>
  );
};

export default Card;
