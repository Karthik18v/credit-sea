import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Line,
} from "recharts";

const data = [
  { month: 1, loans: 500 },
  { month: 2, loans: 320 },
  { month: 3, loans: 180 },
  { month: 4, loans: 670 },
  { month: 5, loans: 50 },
  { month: 6, loans: 240 },
  { month: 7, loans: 290 },
  { month: 8, loans: 10 },
  { month: 9, loans: 90 },
  { month: 10, loans: 680 },
  { month: 11, loans: 200 },
  { month: 12, loans: 1000 },
];

const LoansReleasedChart = () => {
  return (
    <div
      style={{
        width: "95%",
        height: 400,
        padding: 20,
        backgroundColor: "white",
        borderRadius: "6px",
        boxShadow: "0 0 5px rgba(0,0,0,0.1)",
        position: "relative",
      }}
    >
      {/* Green top border line */}
      <div
        style={{
          height: "6px",
          width: "100%",
          backgroundColor: "yellowgreen",
          position: "absolute",
          top: 0,
          left: 0,
          borderTopLeftRadius: "6px",
          borderTopRightRadius: "6px",
        }}
      />
      <h3 style={{ color: "navy", textDecoration: "underline", marginTop: 20 }}>
        Loans Released Monthly
      </h3>
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />

          {/* Area chart */}
          <Area
            type="linear"
            dataKey="loans"
            stroke="yellowgreen"
            fill="yellowgreen"
            activeDot={{ r: 6 }}
          />

          {/* Line chart overlay */}
          <Line
            type="linear"
            dataKey="loans"
            stroke="green"
            strokeWidth={2}
            dot={{ fill: "yellowgreen", r: 4 }}
            activeDot={{ r: 6 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LoansReleasedChart;
