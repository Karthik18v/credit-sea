import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const repaymentData = [
  { month: 1, repayments: 1 },
  { month: 2, repayments: 5 },
  { month: 3, repayments: 6 },
  { month: 4, repayments: 9 },
  { month: 5, repayments: 2 },
  { month: 6, repayments: 5 },
  { month: 7, repayments: 2 },
  { month: 8, repayments: 9 },
  { month: 9, repayments: 6 },
  { month: 10, repayments: 1 },
  { month: 11, repayments: 5 },
  { month: 12, repayments: 4 },
];

const RepaymentsCollectedChart = () => {
  return (
    <div
      style={{
        width: "100%",
        height: 420,
        padding: 20,
        backgroundColor: "#ffffff",
        borderRadius: 6,
        borderTop: "5px solid #a52a2a", // Dark red top line
        borderBottom: "5px solid #a52a2a", // Dark red bottom line
        boxSizing: "border-box",
        marginTop: 50,
      }}
    >
      <h3 style={{ color: "#000", fontWeight: "normal" }}>
        Number of Repayments Collected - Monthly
      </h3>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={repaymentData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="repayments" fill="#8B0000" /> {/* Dark red bars */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RepaymentsCollectedChart;
