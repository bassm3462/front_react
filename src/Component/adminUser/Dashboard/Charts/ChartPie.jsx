import { useRef } from "react";
import { DataPie, option } from "../../../Config/ChartInfo";
import { Pie  } from "react-chartjs-2";
import React from "react";

function ChartPin() {
  return (
    <div className="pie">
      <Pie data={DataPie} ></Pie>
    </div>
  );
}

export default ChartPin;
