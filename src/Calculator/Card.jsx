import React, { useState } from "react";

const Card = ({ card, handleSave, handleCancel, handleDelete }) => {
  const [editData, setEditData] = useState({
    name: "Adarsh",
    email: "adarshedu007@gmail.com",
    profession: "engineer",
  });

  function handleEdit(e) {
    const { name, value } = e.target;
    setEditData((prevEdit) => ({ ...prevEdit, [name]: value }));
  }

  return (
    <form
      onSubmit={() => handleSave(card.id, editData)}
      className="content-container"
    >
      <div className="">
        <img src={card.profile} alt="avatar" />
      </div>
      <div className="input-container">
        <div className="input-content">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={editData.name}
            onChange={(e) => handleEdit(e)}
          />
        </div>
        <div className="input-content">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            value={editData.email}
            onChange={(e) => handleEdit(e)}
          />
        </div>
        <div className="input-content">
          <label htmlFor="profession">Profession:</label>
          <input
            type="text"
            name="profession"
            id="profession"
            value={editData.profession}
            onChange={(e) => handleEdit(e)}
          />
        </div>
      </div>
      <div className="btn-container">
        <button type="submit">Save</button>
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={() => handleDelete(card.id)}>Delete</button>
      </div>
    </form>
  );
};

export default Card;
