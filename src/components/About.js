import React from "react";
import { image, city } from "../data/data";


function About() {
  return (
  <div id="about">
    <h2> About Me </h2>
    <p> Greetings from { city }! It is very cold here, but I am learning React with St. Bernards!</p>
    <img src={image} alt="I made this" />
  </div>
  )
}

export default About;
