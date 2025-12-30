import React, { useState } from "react";
import "./Form.css";

const Form = ({ card, setCard }) => {
  const [data, setData] = useState({
    name: "",
    role: "",
    description: "",
    imageUrl: "",
  });

  function submitHandler(e) {
    e.preventDefault();
    localStorage.setItem("cardData", JSON.stringify([...card, data] || []));
    setCard([...card, data]);
    setData({
      name: "",
      role: "",
      description: "",
      imageUrl: "",
    });
  }

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <h1>Add Contact</h1>
        <input
          type="text"
          onChange={(e) =>
            setData((prev) => ({ ...prev, name: e.target.value }))
          }
          value={data.name}
          placeholder="Full name"
        />
        <input
          type="text"
          onChange={(e) =>
            setData((prev) => ({ ...prev, role: e.target.value }))
          }
          value={data.role}
          placeholder="Role/Position"
        />
        <input
          type="text"
          onChange={(e) =>
            setData((prev) => ({ ...prev, description: e.target.value }))
          }
          value={data.description}
          placeholder="Description"
        />
        <input
          type="text"
          onChange={(e) =>
            setData((prev) => ({ ...prev, imageUrl: e.target.value }))
          }
          value={data.imageUrl}
          placeholder="Image URL"
        />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default Form;
