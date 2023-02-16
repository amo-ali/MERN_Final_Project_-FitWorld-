import React from "react";

function ServicePage() {
  return (
    <div>
      <div className="home">
        <div
          className="background_image"
          style={{ backgroundImage: "url(images/services.jpg)" }}
        />
        <div className="overlay" />
        <div className="home_container">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="home_content">
                  <div className="home_title">Services</div>
                  <div className="home_subtitle">
                    Pilates, Yoga, Fitness, Spinning &amp; many more
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section_title_container">
                <div className="section_subtitle">welcome to FitWorld</div>
                <div className="section_title">Our Service</div>
              </div>
            </div>
          </div>
          <div className="row services_row">
            {/* Service */}
            <div className="col-xl-4 col-md-6 service_col">
              <div className="service">
                <div className="service_title_container d-flex flex-row align-items-center justify-content-start">
                  <div>
                    <div className="service_icon">
                      <img src="images/icon_13.png" alt="" />
                    </div>
                  </div>
                  <div className="service_title">Weight Loss </div>
                </div>
                <div className="service_text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec malesuada lorem maximus mauris scelerisque, at rutrum.
                  </p>
                </div>
              </div>
            </div>
            {/* Service */}
            <div className="col-xl-4 col-md-6 service_col">
              <div className="service">
                <div className="service_title_container d-flex flex-row align-items-center justify-content-start">
                  <div>
                    <div className="service_icon">
                      <img src="images/icon_5.png" alt="" />
                    </div>
                  </div>
                  <div className="service_title">Yoga </div>
                </div>
                <div className="service_text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec malesuada lorem maximus mauris scelerisque, at rutrum.
                  </p>
                </div>
              </div>
            </div>
            {/* Service */}
            <div className="col-xl-4 col-md-6 service_col">
              <div className="service">
                <div className="service_title_container d-flex flex-row align-items-center justify-content-start">
                  <div>
                    <div className="service_icon">
                      <img src="images/icon_6.png" alt="" />
                    </div>
                  </div>
                  <div className="service_title">Spinning </div>
                </div>
                <div className="service_text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec malesuada lorem maximus mauris scelerisque, at rutrum.
                  </p>
                </div>
              </div>
            </div>
            {/* Service */}
            <div className="col-xl-4 col-md-6 service_col">
              <div className="service">
                <div className="service_title_container d-flex flex-row align-items-center justify-content-start">
                  <div>
                    <div className="service_icon">
                      <img src="images/icon_7.png" alt="" />
                    </div>
                  </div>
                  <div className="service_title">Private Fit </div>
                </div>
                <div className="service_text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec malesuada lorem maximus mauris scelerisque, at rutrum.
                  </p>
                </div>
              </div>
            </div>
            {/* Service */}
            <div className="col-xl-4 col-md-6 service_col">
              <div className="service">
                <div className="service_title_container d-flex flex-row align-items-center justify-content-start">
                  <div>
                    <div className="service_icon">
                      <img src="images/icon_8.png" alt="" />
                    </div>
                  </div>
                  <div className="service_title">Nutrition </div>
                </div>
                <div className="service_text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec malesuada lorem maximus mauris scelerisque, at rutrum.
                  </p>
                </div>
              </div>
            </div>
            {/* Service */}
            <div className="col-xl-4 col-md-6 service_col">
              <div className="service">
                <div className="service_title_container d-flex flex-row align-items-center justify-content-start">
                  <div>
                    <div className="service_icon">
                      <img src="images/icon_9.png" alt="" />
                    </div>
                  </div>
                  <div className="service_title">Pillates</div>
                </div>
                <div className="service_text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec malesuada lorem maximus mauris scelerisque, at rutrum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicePage;
