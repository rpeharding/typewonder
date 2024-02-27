import React from "react";

const InfoCard = ({ name, age, pastimes, image }) => {
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
              {topPastimes.map((pastime) => (
                <p>{pastime}</p>
              ))}
            </div>
          </div>
        </div>
        <button className="icon-btn">i</button>
      </div>
    </div>
  );
};

export default InfoCard;
