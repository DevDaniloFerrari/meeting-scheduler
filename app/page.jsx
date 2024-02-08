"use client";

import { useState } from "react";

export default function Home() {
  const [movements, setMovements] = useState([]);

  function onMouseMouve(event) {
    if (event.buttons) {
      setMovements([...movements, { x: event.clientX, y: event.clientY }]);
      console.log(`m${movements.map(movement => movement.x + "," + movement.y).join(",")}`);
    }
  }

  return (
    <div
      style={{
        height: "100vh",
      }}
      onMouseMove={onMouseMouve}
    >
      <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
        <g id="Layer_1">
          <title>Layer 1</title>
          {/* <path d={`m${movements.map(movement => movement.x + "," + movement.y).join(",")}`} id="svg_1" stroke="#000" fill="none" /> */}
          <path d={`m100, 100, 100, 100, h100`} id="svg_1" stroke="#000" fill="none" />
        </g>
      </svg>
    </div>
  );
}
