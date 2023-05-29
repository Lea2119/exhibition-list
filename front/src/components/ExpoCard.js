import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const ExpoCard = (props) => {
  const expo = props.expo;
  const tagColor = expo.tag === "museum" ? "museum-color" : "gallery-color";

  return (
    <div className="card-container">
      <div className="image-container">
        <img src={expo.img} alt="cover" className="image" />
      </div>
      <div className="desc">
        <h2>
          <Link to={`/show-expo/${expo._id}`}>{expo.title}</Link>
        </h2>
        <p className={`tag ${tagColor}`}>{expo.tag}</p>
        <h3>{expo.place}</h3>
        <p>{expo.description}</p>
        <p>STARTING DATE : {expo.starting_date}</p>
        <p>ENDING DATE : {expo.ending_date}</p>
        <p>PRICE : {expo.price}</p>
      </div>
    </div>
  );
};

export default ExpoCard;
