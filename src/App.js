import "./App.css";
import Square from "./Square";
import { useState } from "react";

function App() {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);

  const handleClick = () => {
    setSquares(["", "", "", "", "", "", "", "", ""])
    setPlayer(true)
  }

  const calculateWinner = (array) => {
    const lines = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 4, 6],
      [2, 5, 8],
      [3, 4, 5],
      [6, 7, 8],
    ];
    for (let i=0; i < lines.length; i++){
      let [a, b, c] = lines[i]
      // console.log(array[a], array[b], array[c])
      // console.log(lines[i])
      if (array[a] && array[a] === array[b] && array[a] === array[c]){
        return `${array[a]} won!`
      }
    }
    return "Who will win?"
  }

  // const testVar = `This is a test Variable`;
  return (
    <div className="App">
      <span>{calculateWinner(squares)}</span>
      <button  onClick={handleClick}>Reset</button>
      <div className="container">
        {squares.map((value, index) => {
          return (
            <Square
              squares={squares}
              setSquares={setSquares}
              player={player}
              setPlayer={setPlayer}
              squareValue = {value}
              index = {index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
