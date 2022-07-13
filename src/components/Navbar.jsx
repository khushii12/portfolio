import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <h3 className="nav-item">Home</h3>
      <a class="nav-link" href="#scrollspyHeading1">
        Projects
      </a>
      <h3 className="nav-item">About</h3>
      {/* <h3 className="nav-item">Projects</h3> */}
      <h3 className="nav-item">Skills</h3>
      <button className="btn btn-default contact-btn">Contact</button>
    </div>
  );
};

export default Navbar;
