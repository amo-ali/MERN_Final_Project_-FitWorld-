import React, { useContext } from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="footer_container">
                <div className="footer_content">
                  <div className="footer_logo">
                    <Link to="/">
                      <div className="logo d-flex flex-row align-items-center justify-content-center">
                        <img src="images/dot.png" alt="" />
                        <div>
                          Fit<span>World</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <nav className="footer_nav">
                    <ul className="d-flex flex-sm-row flex-column align-items-sm-start align-items-center justify-content-center">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About us</Link>
                      </li>
                      <li>
                        <Link to="/service">Services</Link>
                      </li>
                      <li>
                        <Link to="/team">Team</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                  <div className="newsletter_container">
                    <form
                      action="#"
                      id="newsletter_form"
                      className="newsletter_form"
                    >
                      <input
                        type="text"
                        className="newsletter_input"
                        placeholder="Enter your email here"
                        required="required"
                      />
                      <button className="newsletter_button">go</button>
                    </form>
                  </div>
                  <div className="copyright d-flex flex-row align-items-start justify-content-sm-end justify-content-center">
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Copyright © All rights reserved | This template is made with
                    <i className="fa fa-heart-o" aria-hidden="true" /> by
                    <Link to="/">FitWorld</Link>
                  </div>
                </div>
                <div className="footer_image text-center">
                  <img src="images/footer.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
