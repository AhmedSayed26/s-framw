import React from "react";

export default function Contact() {
  return (
    <>
      <div className="contact  page-section">
        <div className="container">
          <div className="content d-flex justify-content-center align-items-center flex-column">
            <a className="text-center navbar-brand ">start Framework</a>
            <div className="iconn position-relative d-flex justify-content-center align-items-center">
              <i
                className="fa-solid fa-star m-3 position-relative"
                style={{ color: "#2c3e50" }}
              ></i>
            </div>
          </div>
          <div class="form-container">
            <form id="userForm">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  id="userName"
                  placeholder="userName"
                  required
                />
                <label htmlFor="userName" class="form-label">
                  userName
                </label>
              </div>

              <div class="input-group">
                <input
                  type="number"
                  class="form-control"
                  id="userAge"
                  placeholder="userAge"
                  required
                />
                <label htmlFor="userAge" class="form-label">
                  userAge
                </label>
              </div>

              <div class="input-group">
                <input
                  type="email"
                  class="form-control"
                  id="userEmail"
                  placeholder="userEmail"
                  required
                />
                <label htmlFor="userEmail" class="form-label">
                  userEmail
                </label>
              </div>

              <div class="input-group">
                <input
                  type="password"
                  class="form-control"
                  id="userPassword"
                  placeholder="userPassword"
                  required
                />
                <label htmlFor="userPassword" class="form-label">
                  userPassword
                </label>
              </div>

              <button type="button" class="btn bttnn">
                send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
