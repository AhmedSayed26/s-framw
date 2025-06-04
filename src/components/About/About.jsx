import React from "react";

export default function About() {
  return (
    <div className="about  d-flex justify-content-center align-items-center flex-column">
      <div className="mb-4 container">
        <div className="content d-flex justify-content-center align-items-center flex-column">
          <a className="text-center navbar-brand">about component</a>
          <div className="icon position-relative d-flex justify-content-center align-items-center">
            <i
              className="fa-solid fa-star m-3 position-relative"
              style={{ color: "#ffffff" }}
            ></i>
          </div>
          <div className="row text-white mt-3 Freelancer ">
            <div className="col-md-6">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization
            </div>
            <div className="col-md-6">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
