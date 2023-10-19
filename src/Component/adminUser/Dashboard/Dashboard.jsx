import React, { useEffect, useState } from "react";
import "../style/Order.css";
import "../style/fremwork.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/dashboard.css";
import Charts from "./Charts/ChartsLines";
import ChartPin from "./Charts/ChartPie";
const Dashborad = () => {
  return (
    <div className="">
      <h1 class=" position-relative h1Dahboard">Dashboard</h1>
      <div className="d-flex justify-content-between align-center flex-warp gap-2 mb-5">
        <div className="p-20  rad-10 boxDepartment"> Clothes </div>
        <div className="p-20  rad-10 boxDepartment"> Clothes </div>
        <div className="p-20  rad-10 boxDepartment"> Clothes </div>
        <div className="p-20  rad-10 boxDepartment"> Clothes </div>
        <div className="p-20  rad-10 boxDepartment"> Clothes </div>
      </div>
      <div class=" welcome bg-white rad-10 txt-c-mobile block-mobile">
        <div class="intro p-20  bg-eee">
          <div> Website visit</div>
        </div>
        <div class="body txt-c d-flex p-20 mt-20 mb-20 block-mobile">
          <Charts />
        </div>
      </div>
      {/*  circular chart  */}
      <div className="settings-page mt-20 d-grid gap-20">
        <div className=" pb-20 bg-white rad-10 overflow-hidden ">
          <div class="intro p-20  bg-eee ">
            <div> circular charts</div>
          </div>
          <div className="p-20 chartPie ">
            <ChartPin />
          </div>
        </div>
        <div className="p-20 bg-white rad-10 "></div>
      </div>
    </div>
  );
};
export default Dashborad;
