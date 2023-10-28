import React from "react";
import "../App.css";

export default function NewBtn({ onClick }) {
  return (
    <div>
      <button className="new-apple" onClick={onClick}>
        사과 추가
      </button>
    </div>
  );
}
