import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";


const COLORS = ["#3BFF43", "#109615"];

const inputData = {
  "inPatientPercentage": 50,
  "outPatientPercentage": 50,
  "dailyAverageCount": [
    {
      "date": "Mar 21",
      "inPatientCount": 1,
      "outPatientCount": 0
    },
    {
      "date": "Mar 25",
      "inPatientCount": 1,
      "outPatientCount": 0
    },
    {
      "date": "Mar 25",
      "inPatientCount": 1,
      "outPatientCount": 0
    },
    {
      "date": "Mar 25",
      "inPatientCount": 1,
      "outPatientCount": 0
    },
    {
      "date": "Mar 26",
      "inPatientCount": 1,
      "outPatientCount": 0
    },
    {
      "date": "Mar 26",
      "inPatientCount": 1,
      "outPatientCount": 8
    },
    {
      "date": "Mar 26",
      "inPatientCount": 1,
      "outPatientCount": 4
    },
    {
      "date": "Mar 26",
      "inPatientCount": 1,
      "outPatientCount": 1
    }
  ]
};



function OutAndInpatientGraph({ propdata }) {
  const { dist, data } = convertData(propdata);
  function convertData(inputData) {
    const outPatientTotal = inputData.outPatientPercentage
    const inPatientTotal = inputData.inPatientPercentage

    const dist = [
      { name: "OutPatients", value: outPatientTotal },
      { name: "InPatients", value: inPatientTotal },
    ];

    if (!inputData) {
      return { dist, data: [] };
    }
    const data = inputData.dailyAverageCount.reduce((acc, entry) => {
      const dateIndex = acc.findIndex(item => item.name === entry.date);
      if (dateIndex === -1) {
        acc.push({
          name: entry.date,
          OutPatients: entry.outPatientCount,
          InPatients: entry.inPatientCount
        });
      } else {
        acc[dateIndex].OutPatients += entry.outPatientCount;
        acc[dateIndex].InPatients += entry.inPatientCount;
      }
      return acc;
    }, []);


    return { dist, data };
  }


  return (
    <div className="w-100 container">
      <div className="w-100 flex flex-v-center space-between border-bottom p-b-20">
        <div className="bold-text">Outpatient vs Inpatient seen</div>{" "}
        <div>Month</div>
      </div>
      <div className="w-100 flex  ">
        <BarChart
          width={800}
          height={200}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} strokeDasharray="3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Bar
            barSize={10}
            dataKey="OutPatients"
            fill="#3BFF43"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            barSize={10}
            dataKey="InPatients"
            fill="#109615"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>

        <PieChart width={250} height={200}>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
          />
          <Pie
            data={dist}
            cx={120}
            cy={100}
            innerRadius={53}
            outerRadius={60}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
          >
            {dist.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
}

export default OutAndInpatientGraph;
