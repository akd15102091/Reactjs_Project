import React from "react"
import { NavLink } from "react-router-dom";
import web from "../src/images/sap1.jpg" ;
import  "./index.css"
import Common from "./Common";

function Home() {
  return (
    <React.Fragment>
      <Common 
        name="Grow your business with" 
        imgsrc={web} 
        visit="/service" 
        btname="Get Started" 
      />
    </React.Fragment>
  );
}

export default Home;
