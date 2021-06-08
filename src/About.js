import React from "react"
import { NavLink } from "react-router-dom";
import web from "../src/images/sap2.jpg" ;
import Common from "./Common";
import  "./index.css"

function About() {
  return (
    <React.Fragment>
      <Common 
        name="Welcome to About page" 
        imgsrc={web} 
        visit="/contact" 
        btname="Contact Now" 
      />
    </React.Fragment>
  );
}

export default About;
