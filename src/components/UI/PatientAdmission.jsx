import React from "react";

function PatientAdmission() {
  // Sample data for the line graph
  const data = [65, 59, 80, 81, 56];

  // Calculate the maximum value in the data array for scaling
  const max = Math.max(...data);

  // Calculate the y-coordinate based on the data value and the scaling
  const calculateY = (value) => (value / max) * 100;

  // Generate path data for the line
  const pathData = data
    .map((value, index) => `${index * 20},${100 - calculateY(value)}`)
    .join(" ");

  return (
    <div className="container">
      <div className="flex flex-v-center w-100 space-between border-bottom p-b-20">
        {" "}
        <div className="bold-text">PatientAdmission</div> <div>Today</div>{" "}
      </div>
      <svg height="200" width="400">
        {/* Horizontal grid lines */}
        <line x1="0" y1="0" x2="200" y2="0" stroke="#ccc" />
        <line x1="0" y1="25" x2="200" y2="25" stroke="#ccc" />
        <line x1="0" y1="50" x2="200" y2="50" stroke="#ccc" />
        <line x1="0" y1="75" x2="200" y2="75" stroke="#ccc" />
        <line x1="0" y1="100" x2="200" y2="100" stroke="#ccc" />

        {/* Vertical grid lines */}
        <line x1="0" y1="0" x2="0" y2="100" stroke="#ccc" />
        <line x1="40" y1="0" x2="40" y2="100" stroke="#ccc" />
        <line x1="80" y1="0" x2="80" y2="100" stroke="#ccc" />
        <line x1="120" y1="0" x2="120" y2="100" stroke="#ccc" />
        <line x1="160" y1="0" x2="160" y2="100" stroke="#ccc" />

        {/* Line graph */}
        <polyline
          points={`0,${100 - calculateY(data[0])} ${pathData}`}
          fill="none"
          stroke="green"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

export default PatientAdmission;
