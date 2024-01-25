import React from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Label,
  Legend,
} from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
];
const COLORS = ["#109615", "#FFC700", "#FF0000"];

function CustomerManagement() {
  const totalValue = data.reduce((acc, entry) => acc + entry.value, 0);
  return (
    <div className="w-100">
      <div className="m-t-20">...</div>
      <div className="m-t-20"> Customer Management</div>
      <div className="container w-25 m-t-20">
        <div className="w-100 flex flex-v-center space-between border-bottom p-b-20">
          <div className="bold-text">Patients Evaluation</div>
          <div>December</div>
        </div>
        <PieChart width={300} height={300}>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
          />
          <Pie
            data={data}
            cx={120}
            cy={100}
            innerRadius={60}
            outerRadius={75}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
            <Label
              className="bold-text"
              fontSize={24}
              value={totalValue}
              position="center"
            />
          </Pie>
        </PieChart>
      </div>
    </div>
  );
}

export default CustomerManagement;
