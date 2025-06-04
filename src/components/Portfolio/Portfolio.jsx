import React, { useState, useEffect } from "react";
import img1 from "../../assets/images/poert1.png";
import img2 from "../../assets/images/port2.png";
import img3 from "../../assets/images/port3.png";

export default function Portfolio() {
  const [imgToShow, setImgToShow] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);
  useEffect(() => {
    if (imgToShow) {
      setShowOverlay(true);
    } else {
      setShowOverlay(false);
    }
  }, [imgToShow]);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("overlay")) {
      setImgToShow(null);
    }
  };

  return (
    <div className="portfolio  page-section">
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
        <div className="sec2 mb-4">
          <div className="row g-5 justify-content-center align-items-center">
            {[img1, img2, img3, img1, img2, img3].map((img, i) => (
              <div className="col-md-4" key={i}>
                <div className="photo position-relative  w-100">
                  <img
                    src={img}
                    alt={`Portfolio ${i}`}
                    className="w-100 rounded"
                    style={{ cursor: "pointer" }}
                  />
                  <div
                    className="overlayHover "
                    onClick={() => setImgToShow(img)}
                  >
                    <i
                      className="fa-solid fa-plus "
                      style={{ color: " #ffffff" }}
                    ></i>
                  </div>
                </div>
              </div>
            ))}
            {showOverlay && (
              <div className="overlay" onClick={handleOverlayClick}>
                <div className="overlay-content">
                  <img src={imgToShow} alt="Preview" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
