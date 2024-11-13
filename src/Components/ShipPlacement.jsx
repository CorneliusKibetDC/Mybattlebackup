

import React, { useState } from "react";

function ShipPlacement({ board, onPlaceShip, shipsToPlace }) {
  const [orientation, setOrientation] = useState("horizontal");

  // Handle ship placement when clicking a cell
  const handleCellClick = (x, y) => {
    if (shipsToPlace.length > 0) {
      const currentShipSize = shipsToPlace[0]; // Get the size of the ship to place
      const coordinates = getShipCoordinates(x, y, currentShipSize, orientation);
      if (coordinates) {
        onPlaceShip(coordinates, currentShipSize); // Call the onPlaceShip function to place the ship
      }
    }
  };

  // Determines the coordinates for the ship placement based on orientation
  const getShipCoordinates = (x, y, length, orientation) => {
    const coordinates = [];
    for (let i = 0; i < length; i++) {
      const newX = orientation === "horizontal" ? x : x + i;
      const newY = orientation === "vertical" ? y : y + i;

      // Check if out of bounds
      if (newX >= 10 || newY >= 10) return null;
      coordinates.push([newX, newY]);
    }
    return coordinates;
  };

  // Toggle ship placement orientation between horizontal and vertical
  const toggleOrientation = () => {
    setOrientation((prevOrientation) =>
      prevOrientation === "horizontal" ? "vertical" : "horizontal"
    );
  };

  return (
    <div>
      <h2>Place Your Ships</h2>
      <h3>Current Ship Length: {shipsToPlace[0]}</h3> {/* Always display the next ship size to place */}
      <div>
        <button onClick={toggleOrientation}>
          Toggle Orientation (Current: {orientation})
        </button>
      </div>
      <div className="board">
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`cell ${cell.ship ? "ship" : ""}`}
              onClick={() => handleCellClick(rowIndex, colIndex)} // Place the ship on click
              style={{
                backgroundColor: cell.ship ? "gray" : "lightblue",
                border: "1px solid #000",
                width: "30px",
                height: "30px",
                display: "inline-block",
              }}
            >
              {cell.ship ? "🚢" : ""}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ShipPlacement;



