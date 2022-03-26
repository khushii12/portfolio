import React from "react";
import cookie from "../img/cookie.jpg";
import hoppy from "../img/hoppy.jpg";
import planx from "../img/planx.jpg";

const Projects = () => {
  return (
    <div class="proj">
      <h1 class="heading">My Projects</h1>
      <div class="row">
        <div class="column">
          <div class="card card1">
            <h4>
              <b>Cookie</b>
            </h4>
            <img src={cookie} alt="icon" className="proj-img" />

            <p>A complete hands-free experience to operate a system.</p>
            <button class="btn btn-light">Github Link</button>
          </div>
        </div>
        <div class="column">
          <div class="card">
            {" "}
            <h4>
              <b>PlanX</b>
            </h4>
            <img src={planx} alt="icon" className="proj-img" />
            <p>An Android App to plan your day, projects, tasks etc. easily!</p>
            <button class="btn btn-light">Github Link</button>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <h4>
              <b>Hoppy</b>
            </h4>
            <img src={hoppy} alt="icon" className="proj-img" />

            <p>A 2D scrolling game developed using pygame.</p>
            <button class="btn btn-light">Github Link</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
