import React, {useState} from "react";

function ListingCard({id, description, image, location, onDeleteClick}) {
  const [buttonStatus, setButtonStatus] = useState(false)

  const handleButtonClick = ()=>{
    setButtonStatus(!buttonStatus)
  }

  const handleDelete = ()=>{
    console.log(id)
    fetch(`http://localhost:6001/listings/${id}`,{
      method:'DELETE'})
    
    onDeleteClick(id)

  }

  return (
    <li className="card" id={id}>
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details" >
        { buttonStatus ? (
          <button onClick={handleButtonClick} className="emoji-button favorite active" >★</button>
        ) : (
            <button onClick={handleButtonClick} className="emoji-button favorite" >☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
