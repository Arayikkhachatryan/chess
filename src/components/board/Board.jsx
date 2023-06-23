import React from "react";
import "./BoardStyle.css";
import Pawn from "../figures/pawn/Pawn";

const Board = () => {
  let board = [];
  const figure = [{ img: "", x: "", y: "" }];

  for (let fig = 0; fig < 8; fig++) {
    const type = fig === 0 ? "black" : "white";
    const xPosition = fig === 0 ? 7 : 0;

    figure.push({ img: `assets/${type}-king.png`, x: xPosition, y: 4 });
    figure.push({ img: `assets/${type}-queen.png`, x: xPosition, y: 3 });
    figure.push({ img: `assets/${type}-knight.png`, x: xPosition, y: 6 });
    figure.push({ img: `assets/${type}-knight.png`, x: xPosition, y: 1 });
    figure.push({ img: `assets/${type}-rook.png`, x: xPosition, y: 0 });
    figure.push({ img: `assets/${type}-rook.png`, x: xPosition, y: 7 });
    figure.push({ img: `assets/${type}-bishop.png`, x: xPosition, y: 2 });
    figure.push({ img: `assets/${type}-bishop.png`, x: xPosition, y: 5 });
  }

for (let index = 0; index < 8; index++) {
  figure.push({ img: "assets/white-pawn.png", x: 1, y: index });

}

for (let index = 0; index < 8; index++) {
  figure.push({ img: "assets/black-pawn.png", x: 6, y: index });

}

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const cellColor = j + i;
      let img = undefined;

      figure.forEach((el) => {
        if (el.x === i && el.y === j) {
          img = el.img;
        }
        console.log(el);
      });

      board.push(<Pawn cellNum={cellColor} img={img} />);
    }
  }

  return (
    <div className="board">
      <div className="board-wrapper">{board}</div>
    </div>
  );
};

export default Board;
