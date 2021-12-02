import React from "react";
import "./style.css";

function Buttons(prev, next) {
  return (
    <div className="grid__buttonContainer">
      <div className="grid__button">
        <button type="button" onClick={prev} className="grid__button--prev">
          Previous
        </button>
      </div>
      <div className="grid__button">
        <button type="button" onClick={next} className="grid__button--next">
          Next
        </button>
      </div>
    </div>
  );
}

export default Buttons;
