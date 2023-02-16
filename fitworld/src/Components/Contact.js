import React from "react";

function Contact() {
  return (
    <div>
      <div className="home">
        <div
          className="background_image"
          style={{ backgroundImage: "url(images/blog.jpg)" }}
        />
        <div className="overlay" />
        <div className="home_container">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="home_content">
                  <div className="home_title">Contact</div>
                  <div className="home_subtitle">
                    Pilates, Yoga, Fitness, Spinning &amp; many more
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact */}
      <div className="contact">
        <div className="container">
          <div className="row">
            {/* Contact Content */}
            <div className="col-lg-4">
              <div className="contact_content">
                <div className="contact_logo">
                  <div className="logo d-flex flex-row align-items-center justify-content-start">
                    <img src="images/dot.png" alt="" />
                    <div className="text-dark p-4">
                      Fit<span>World</span>
                    </div>
                  </div>
                </div>
                <div className="contact_text">
                  <p>
                    Etiam nec odio vestibulum est mattis effic iturut magna.
                    Pellentesque sit amet tellus blandit. Odio vestibulum est
                    mattis effic iturut.
                  </p>
                </div>
                <div className="contact_list">
                  <ul>
                    <li className="d-flex flex-row align-items-start justify-content-start">
                      <div>
                        <div>A:</div>
                      </div>
                      <div>1481 Creekside Lane Avila Beach, CA 931</div>
                    </li>
                    <li className="d-flex flex-row align-items-start justify-content-start">
                      <div>
                        <div>P:</div>
                      </div>
                      <div>+53 345 7953 32453</div>
                    </li>
                    <li className="d-flex flex-row align-items-start justify-content-start">
                      <div>
                        <div>M:</div>
                      </div>
                      <div>yourmail@gmail.com</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="col-lg-8 contact_col">
              <div className="contact_title">Get in touch</div>
              <div className="contact_form_container">
                <form>
                  <div className="row">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="mt-3">
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="text"
                      rows={6}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
