import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center">
              <h3>Location</h3>
              <p className="par">2215 John Daniel Drive</p>
              <p className="par">Clark, MO 65243</p>
            </div>
            <div className="col-md-4 text-center">
              <h3>AROUND THE WEB</h3>
              <div className="d-flex justify-content-center align-items-center mt-3">
                <span className="social-icon">
                  <i
                    className="fa-brands fa-facebook"
                    style={{ color: "#ffffff" }}
                  ></i>
                </span>
                <span className="social-icon">
                  <i
                    className="fa-brands fa-twitter"
                    style={{ color: "#ffffff" }}
                  ></i>
                </span>
                <span className="social-icon">
                  <i
                    className="fa-brands fa-linkedin-in"
                    style={{ color: "#ffffff" }}
                  ></i>
                </span>
                <span className="social-icon">
                  <i
                    className="fa-solid fa-globe"
                    style={{ color: "#ffffff" }}
                  ></i>
                </span>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <h3>ABOUT FREELANCER</h3>
              <p className="par">
                Freelance is a free to use, MIT licensed Bootstrap theme created
                by ahmed sayed.
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-100 last">
        <p className="text-center text-white">Copyright © Your Website 2025</p>
      </div>
    </>
  );
}
