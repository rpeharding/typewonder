import React from "react";
import { Link } from "react-router-dom";

const InfoCard = ({ name, age, pastimes, image, id }) => {
  const topPastimes = pastimes.slice(0, 3);

  return (
    <div className="info-card">
      <img className="card-image" src={image} />
      <div className="card-info flex-row">
        <div>
          <h3>
            {name}, {age}
          </h3>
          <div className="pastime-section">
            <p>Enjoys:</p>
            <div className="pastime">
              {topPastimes.map((pastime, index) => (
                <p key={index}>{pastime}</p>
              ))}
            </div>
          </div>
        </div>
        <Link to={"/profile/" + id}>
          <button className="icon-btn">i</button>
        </Link>
      </div>
    </div>
  );
};

export default InfoCard;