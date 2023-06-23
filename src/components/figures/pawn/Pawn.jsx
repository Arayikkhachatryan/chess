import React from "react";

const Pawn = ({ cellNum, img }) => {
  if (cellNum % 2 === 0) {
    return (
      <div className="board-cell-light">
        <img src={img} />
      </div>
    );
  } else {
    return (
      <div className="board-cell-dark">
        <img src={img} />
      </div>
    );
  }
};

export default Pawn;
