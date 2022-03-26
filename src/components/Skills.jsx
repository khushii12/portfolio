import React from "react";
import r from "../img/i-react.png";
import css from "../img/i-css.png";
import cpp from "../img/i-cpp.png";
import html from "../img/i-html-5.png";
import js from "../img/i-js.png";
import python from "../img/python.png";
import mongo from "../img/mongo.png";
import kotlin from "../img/kotlin.png";
import android from "../img/android.png";
import nodeExpress from "../img/i-nodejs.png";

const Skills = () => {
  return (
    <div className="skills">
      <h1 className="heading">My Skills</h1>
      <div className="skill-icon">
        <img src={r} alt="icon" className="skill-item" />
        <img src={nodeExpress} alt="icon" className="skill-item" />
        <img src={css} alt="icon" className="skill-item" />
        <img src={html} alt="icon" className="skill-item" />
        <img src={js} alt="icon" className="skill-item" />
        <br />
        <img src={cpp} alt="icon" className="skill-item" />
        <img src={mongo} alt="icon" className="skill-item" />
        <img src={kotlin} alt="icon" className="skill-item" />
        <img src={android} alt="icon" className="skill-item" />
        <img src={python} alt="icon" className="skill-item" />
      </div>
    </div>
  );
};

export default Skills;
