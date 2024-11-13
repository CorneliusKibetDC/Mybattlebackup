
      export const initializeBoard = () => {
        return Array.from({ length: 10 }, () => Array(10).fill({ ship: false, hit: false, miss: false }));
      };
      
      export const placeShipOnBoard = (board, coordinates, length) => {
        const newBoard = board.map(row => row.slice());
        coordinates.forEach(([x, y]) => {
          newBoard[x][y] = { ship: true, hit: false, miss: false };
        });
        return newBoard;
      };
      
      export const getRandomCoordinates = (board, length) => {
        const randomX = Math.floor(Math.random() * (10 - length));
        const randomY = Math.floor(Math.random() * 10);
        const coordinates = [];
        for (let i = 0; i < length; i++) {
          coordinates.push([randomX + i, randomY]);
        }
        return coordinates;
      };
      
      export const checkShipPlacementValid = (board, coordinates, length) => {
        return coordinates.every(([x, y]) => board[x][y].ship === false);
      };
    
      export const takeShot = (board, x, y) => {
        const newBoard = board.map(row => row.map(cell => ({ ...cell }))); // Deep copy of the board
      
        if (newBoard[x][y].hit || newBoard[x][y].miss) {
          return newBoard; // Skip if already hit or missed
        }
      
        if (newBoard[x][y].ship) {
          newBoard[x][y].hit = true;
        } else {
          newBoard[x][y].miss = true;
        }
      
        return newBoard;
      };
      