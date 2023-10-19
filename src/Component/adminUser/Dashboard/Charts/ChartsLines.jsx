import React from "react";
import { useRef } from "react";
import { Data, option } from "../../../Config/ChartInfo";
// Chart library
import { Line, getElementsAtEvent } from "react-chartjs-2";
function Charts() {
  const ChartRef = useRef();
  const HandlChart = (event) => {
    console.log("Clicked", getElementsAtEvent(ChartRef.current, event));
  };
  return (
    <div>
      <Line
        data={Data}
        options={option}
        onClick={(event) => HandlChart(event)}
        ref={ChartRef}
      ></Line>
    </div>
  );
}
export default Charts;
