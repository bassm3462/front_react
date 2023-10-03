import React from "react";
import "../style/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header/header";
import Department from "./page/Department";
import Footer from "./header/footer";
import Contact from "./page/Contact";
import About from "./page/About";
import Dashborad from "./page/Dashborad";
import { useState, useEffect } from "react";
import { GridLoader,ClipLoader } from "react-spinners";
import { override } from "../style/style";
import Services from "./page/service"
function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <Header />
      {loading ? (
        <ClipLoader
          loading={loading}
          cssOverride={override}
          size={75}
          color="#2196f3"
        />
      ) : (
        <>
          <Dashborad />
          <About />
          <Services/>
          <Department />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default Home;
