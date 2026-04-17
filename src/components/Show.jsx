import { useState } from "react";

function Show({ isShown, setIsShown }) {
  return (
    <button className="tour-btn" onClick={() => setIsShown((s) => !s)}>
      {isShown ? "Show less" : "Show more"}
    </button>
  );
}

export default Show;
