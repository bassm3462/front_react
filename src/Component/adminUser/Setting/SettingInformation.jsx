import React from "react";
import "../style/Order.css";
import "../style/fremwork.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUS from "./pages/AboutUS";
import Services from "./pages/Services";
import SocialMidea from "./pages/SocialMidea";
import MoreInfo from "./pages/MoreInfo";
function SettingInformation() {
  return (
    <>
      <h1 className="p-relative">Settings</h1>
      <div className="settings-page m-20 d-grid gap-20">
        {/* Start Settings Box */}
        <AboutUS />
        {/* End Settings Box */}
        {/* Start Settings Box */}
        <Services />

        {/* End Settings Box */}
        {/* Start Settings Box */}
        <MoreInfo />
        {/* End Settings Box */}
        {/* Start Settings Box */}
        <SocialMidea />
      </div>
    </>
  );
}
export default SettingInformation;
