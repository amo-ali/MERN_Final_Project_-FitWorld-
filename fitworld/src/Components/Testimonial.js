import React from "react";
import { Link } from "react-router-dom";
import Gallery from "./Gallery";

function Testimonial() {
  return (
    <div>
      <div className="testimonials">
        <div
          className="parallax_background parallax-window"
          data-parallax="scroll"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(images/bg1.png)",
            backgroundPosition: "center",
          }}
          //   data-image-src="images/bg1.png"
          data-speed="0.8"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section_title_container">
                <div className="section_subtitle">welcome to sportfit</div>
                <div className="section_title">Testimonials</div>
              </div>
              {/* Testimonial */}
              <div className="test test_1 d-flex flex-row align-items-start justify-content-start">
                <div>
                  <div className="test_image">
                    <img src="images/test_1.jpg" alt="" />
                  </div>
                </div>
                <div className="test_content">
                  <div className="test_name">
                    <a href="#">Diane Smith</a>
                  </div>
                  <div className="test_title">client</div>
                  <div className="test_text">
                    <p>
                      Etiam nec odio vestibulum est mattis effic iturut magna.
                      Pellentesque sit amet tellus blandit. Etiam nec odio
                      vestibulum est mattis effic iturut magna. Pellentesque sit
                      am et tellus blandit. Etiam nec odio vestibul. Etiam nec
                      odio vestibulum est mat tis effic iturut magna.
                    </p>
                  </div>
                  <div className="rating rating_4 test_rating">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              {/* Testimonial */}
              <div className="test d-flex flex-row align-items-start justify-content-start">
                <div>
                  <div className="test_image">
                    <img src="images/test_2.jpg" alt="" />
                  </div>
                </div>
                <div className="test_content">
                  <div className="test_name">
                    <a href="#">Diane Smith</a>
                  </div>
                  <div className="test_title">client</div>
                  <div className="test_text">
                    <p>
                      Etiam nec odio vestibulum est mattis effic iturut magna.
                      Pellentesque sit amet tellus blandit. Etiam nec odio
                      vestibulum est mattis effic iturut magna. Pellentesque sit
                      am et tellus blandit. Etiam nec odio vestibul. Etiam nec
                      odio vestibulum est mat tis effic iturut magna.
                    </p>
                  </div>
                  <div className="rating rating_4 test_rating">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
              </div>
              {/* Testimonial */}
              <div className="test d-flex flex-row align-items-start justify-content-start">
                <div>
                  <div className="test_image">
                    <img src="images/test_3.jpg" alt="" />
                  </div>
                </div>
                <div className="test_content">
                  <div className="test_name">
                    <a href="#">Diane Smith</a>
                  </div>
                  <div className="test_title">client</div>
                  <div className="test_text">
                    <p>
                      Etiam nec odio vestibulum est mattis effic iturut magna.
                      Pellentesque sit amet tellus blandit. Etiam nec odio
                      vestibulum est mattis effic iturut magna. Pellentesque sit
                      am et tellus blandit. Etiam nec odio vestibul. Etiam nec
                      odio vestibulum est mat tis effic iturut magna.
                    </p>
                  </div>
                  <div className="rating rating_4 test_rating">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row test_button_row">
            <div className="col text-center">
              <div className="button test_button">
                <Link to="/join">Join Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Gallery />
    </div>
  );
}

export default Testimonial;
