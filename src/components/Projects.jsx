import React from "react";
import cookie from "../img/cookie.jpg";
import hoppy from "../img/hoppy.jpg";
import planx from "../img/planx.jpg";

const Projects = () => {
  return (
    <div class="proj">
      <h1 id="scrollspyHeading1" class="heading">
        My Projects
      </h1>
      <div class="row">
        <div class="column">
          <div class="card card1">
            <h4>
              <b>Cookie</b>
            </h4>
            <img src={cookie} alt="icon" className="proj-img" />

            <p>A complete hands-free experience to operate a system.</p>
            {/* <button
              onclick="window.open('https://github.com/khushii12/Cookie','_blank','resizable=yes')"
              onclass="btn btn-light"
            >
              Github Link
            </button> */}
            <a href="https://github.com/khushii12/Cookie" target="_">
              <input type="button" value="Github Link" class="btn btn-light" />
            </a>
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
            <a href="https://github.com/khushii12/PlanX-1" target="_">
              <input type="button" value="Github Link" class="btn btn-light" />
            </a>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <h4>
              <b>Hoppy</b>
            </h4>
            <img src={hoppy} alt="icon" className="proj-img" />

            <p>A 2D scrolling game developed using pygame.</p>
            <a href="https://github.com/khushii12/Hoppy" target="_">
              <input type="button" value="Github Link" class="btn btn-light" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
