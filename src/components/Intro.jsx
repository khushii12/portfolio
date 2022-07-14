import React from "react";
import Me from "../img/myDp2.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hi! I Am </h2>
          <h1 className="i-name"> Khushi </h1>

          <p className="i-desc">
            I am a student of Delhi Technological University, pursuing Bachelor
            of Technology (B.Tech.) in Information Technology. I am passionate
            about programming and designing Websites.
          </p>
        </div>
      </div>
      <div className="i-right">
        {/* <div className="i-bg1"></div>
        <div className="i-bg2"></div> */}

        <img src={Me} alt="Khushi" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
