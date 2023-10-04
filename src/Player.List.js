import React from "react";
import Players from "./Players";
import "bootstrap/dist/css/bootstrap.min.css";
import playersOutput from "./playersOutput";

const PlayerList = () => {
  return (
    <div>
      <h1>List of Players</h1>
      <div className="row">{Players && <playersOutput />}</div>
    </div>
  );
};

export default PlayerList;
