import React from "react";
import Me from "../img/myDp.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hi! I Am </h2>
          <h1 className="i-name"> Khushi </h1>

          <h2 className="i-desc">
            I am a student of Delhi Technological University,
          </h2>
          <br />
          <h2 className="i-desc">
            pursuing Bachelor of Technology (B.Tech.) in Information
          </h2>
          <br />
          <h2 className="i-desc">
            Technology. I am passionate about programming
          </h2>
          <br />
          <h2 className="i-desc">and designing Websites.</h2>
          <br />
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg1"></div>
        <div className="i-bg2"></div>

        <img src={Me} alt="Khushi" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
