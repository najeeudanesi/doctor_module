import React, { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Label,
  Legend,
} from "recharts";
import { get } from "../../utility/fetch";
const PER_PAGE = 4; // Number of items per page

const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
];
const COLORS = ["#109615", "#FFC700", "#FF0000"];

function CustomerEngagement() {
  const [customerEngagements, setCustomerEngagements] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [month, setMonth] = useState("march");
  const [avg, setAvg] = useState({});
  const [totalValue, setTotalValue] = useState(0);

  const fetchAvg = async () => {
    try {
      const response = await get(`/customerengagements/customerengagements/1/${month}/average`);
      const data = response
      console.log(data)
      convertAvg(data);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchData = async () => {
    try {
      const response = await get(`/customerengagements/customerengagements/1/${month}?pageIndex=${currentPage}&pageSize=${PER_PAGE}`);
      const data = response
      console.log(data)
      setCustomerEngagements(data.data);
      setTotalPages(Math.ceil(data.pageCount));
    } catch (e) {
      console.log(e);
    }
  };

  const convertAvg = (responseData) => {
    const logData = Object.entries(responseData) // Convert object to key-value pairs array
      .filter(([key]) => key !== "month") // Filter out the "month" key
      .map(([key, value]) => ({ // Transform each key-value pair to data object
        name: key.replace(/([A-Z])/g, (match) => ` ${match.toLowerCase()}`), // Format key names (e.g., excellentPercentage -> 
        value,
      }));

    setAvg(logData);
    const total = logData.reduce((acc, entry) => acc + entry.value, 0);
    setTotalValue(total);
  };

  useEffect(() => {
    fetchData();
    fetchAvg();
    console.log(totalValue)
  }, [month, currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  return (
    <div className="w-100">
      <div className="m-t-20">...</div>
      <div className="m-t-20">Customer Engagement</div>
      <div className="flex gap-16">
        {/* Dropdown for month selection */}


        {/* Pie chart section */}
        <div>

          <div className="container">
            <div className="dropdown">
              <select value={month} onChange={handleMonthChange}>
                {months.map((monthOption) => (
                  <option key={monthOption} value={monthOption}>
                    {monthOption}
                  </option>
                ))}
              </select>
            </div>
            <PieChart width={300} height={300}>
              <Legend
                iconType="circle"
                layout="horizontal"
                verticalAlign="bottom"
              />
              <Pie data={avg} cx={120} cy={100} innerRadius={60} outerRadius={75} fill="#8884d8" paddingAngle={0} dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                <Label className="bold-text" fontSize={24} value={totalValue} position="center" />
              </Pie>

            </PieChart>
          </div>
        </div>

        {/* Engagement list section */}
        <div>
          <div className="customer-engagements">
            {customerEngagements.map((engagement) => (
              <div key={engagement.id}>
                <span className="created-at">
                  {new Date(engagement.createdAt).toLocaleDateString()}
                </span>
                <div className="engagement-details m-t-20">
                  <span className="comment-text">{engagement.comments}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination section */}
          <div className="pagination flex space-between">
            <div className="flex gap-8">
              <div className="bold-text">Page</div> <div>{currentPage}/{totalPages}</div>
            </div>
            <div className="flex gap-8">
              {/* Previous button */}
              <button
                className={`pagination-btn ${currentPage === 1 ? 'disabled' : ''}`}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                {"<<"}
              </button>
              {/* Page numbers */}
              {Array.from({ length: totalPages > 3 ? 3 : totalPages }, (_, i) => (
                <button
                  key={`page-${i + 1}`}
                  className={`pagination-btn ${currentPage === i + 1 ? 'bg-green text-white' : ''}`}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              {/* Ellipsis */}
              {totalPages > 3 && <span>...</span>}
              {/* Next button */}
              <button
                className={`pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                {">>"}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CustomerEngagement;