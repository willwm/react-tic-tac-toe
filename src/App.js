import { useState } from "react";

function Square({ initialValue }) {
  const [value, setValue] = useState(initialValue);

  function handleClick(val) {
    console.log(`${val} clicked!`);
    setValue("X");
  }

  return (
    <button className="square" onClick={() => handleClick(value)}>
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square initialValue="1" />
        <Square initialValue="2" />
        <Square initialValue="3" />
      </div>
      <div className="board-row">
        <Square initialValue="4" />
        <Square initialValue="5" />
        <Square initialValue="6" />
      </div>
      <div className="board-row">
        <Square initialValue="7" />
        <Square initialValue="8" />
        <Square initialValue="9" />
      </div>
    </>
  );
}
