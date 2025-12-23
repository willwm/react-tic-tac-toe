import { useState } from "react";

function Square({ initialValue }) {
  const [value, setValue] = useState(initialValue);

  function handleClick(val) {
    console.log(`${val} clicked!`);
    if (val === "X") {
      setValue(initialValue);
    } else {
      setValue("X");
    }
  }

  return (
    <button className="square" onClick={() => handleClick(value)}>
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <>
      <div className="board-row">
        <Square initialValue={squares[0]} />
        <Square initialValue={squares[1]} />
        <Square initialValue={squares[2]} />
      </div>
      <div className="board-row">
        <Square initialValue={squares[3]} />
        <Square initialValue={squares[4]} />
        <Square initialValue={squares[5]} />
      </div>
      <div className="board-row">
        <Square initialValue={squares[6]} />
        <Square initialValue={squares[7]} />
        <Square initialValue={squares[8]} />
      </div>
    </>
  );
}
