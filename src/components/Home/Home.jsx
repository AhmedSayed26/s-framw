import React from "react";
import photo from "../../assets/images/avataaars.svg";

export default function Home() {
  return (
    <div className="home d-flex justify-content-center align-items-center flex-column">
      <div className="mb-4">
        <div className="image mb-5 d-flex justify-content-center align-items-center">
          <img className="img" src={photo} alt="avatar" />
        </div>
        <div className="content ">
          <a className="text-center navbar-brand">start Framework</a>
          <div className="icon position-relative d-flex justify-content-center align-items-center">
            <i
              className="fa-solid fa-star m-3 position-relative"
              style={{ color: "#ffffff" }}
            ></i>
          </div>
          <div>
            <span className="text-center text-white d-block">
              Graphic Artist - Web Designer - Illustrator
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
