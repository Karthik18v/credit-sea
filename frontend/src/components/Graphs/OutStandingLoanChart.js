import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const barData = [
  { month: 1, loans: 40 },
  { month: 2, loans: 480 },
  { month: 3, loans: 620 },
  { month: 4, loans: 920 },
  { month: 5, loans: 120 },
  { month: 6, loans: 460 },
  { month: 7, loans: 230 },
  { month: 8, loans: 880 },
  { month: 9, loans: 560 },
  { month: 10, loans: 110 },
  { month: 11, loans: 440 },
  { month: 12, loans: 350 },
];

const OutstandingLoansChart = () => {
  return (
    <div
      style={{
        width: "100%",
        height: 420,
        padding: 20,
        backgroundColor: "#ffffff",
         borderRadius: "6px",
        borderTop: "5px solid #0000cc", // Blue top line
        borderBottom: "5px solid #0000cc", // Blue bottom line
        boxSizing: "border-box",
        marginTop: 50,
      }}
    >
      <h3 style={{ color: "darkblue", textDecoration: "underline" }}>
        Total Outstanding Open Loans - Monthly
      </h3>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={barData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="loans" fill="#007bff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OutstandingLoansChart;
