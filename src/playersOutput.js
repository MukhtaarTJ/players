import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const playersOutput = ({ Players }) => {
  return (
    <div>
      {Players.map((player, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <div className="card">
            <img
              src={player.imageUrl}
              alt={player.name}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{player.name}</h5>
              <p className="card-text">Team: {player.team}</p>
              <p className="card-text">Nationality: {player.nationality}</p>
              <p className="card-text">Jersey Number: {player.jerseyNumber}</p>
              <p className="card-text">Age: {player.age}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default playersOutput;
