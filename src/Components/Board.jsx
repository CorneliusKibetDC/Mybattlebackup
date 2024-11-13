


import React from "react";
import Cell from "./Cell.jsx";

function Board({ board, onCellClick, isPlayer }) {
  return (
    <div className="board">
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            x={rowIndex}
            y={colIndex}
            cell={cell}
            onClick={onCellClick}
            isPlayer={isPlayer}
          />
        ))
      )}
    </div>
  );
}

export default Board;