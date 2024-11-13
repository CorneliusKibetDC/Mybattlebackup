

import React, { useEffect } from "react";

// Import sound files
import explosionSound from "../assets/explosion1.mp3"; // Adjust the path to where the sound file is stored
import splashSound from "../assets/splash.mp3"; // New splash sound file for a miss

function Cell({ x, y, cell, onClick, isPlayer }) {
  let cellStyle = {};

  if (cell.hit) {
    cellStyle.backgroundColor = "red"; // Hit
  } else if (cell.miss) {
    cellStyle.backgroundColor = "green"; // Missed shot
  } else if (cell.ship && isPlayer) {
    cellStyle.backgroundColor = "gray"; // Player's ship is visible during placement
  } else {
    cellStyle.backgroundColor = "lightblue"; // Empty space
  }

  // Play explosion sound on hit
  useEffect(() => {
    if (cell.hit) {
      const audio = new Audio(explosionSound);
      audio.play();
    } else if (cell.miss) { // Play splash sound for miss
      const audio = new Audio(splashSound);
      audio.play();
    }
  }, [cell.hit, cell.miss]);

  return (
    <div
      className="cell"
      style={cellStyle}
      onClick={!isPlayer ? () => onClick(x, y) : undefined} // Only clickable on the opponent's board
    >
      {cell.hit ? "🔥" : cell.ship && isPlayer ? "🚢" : ""} {/* Fire icon for hits, ship icon for player's ship */}
    </div>
  );
}

export default Cell;
