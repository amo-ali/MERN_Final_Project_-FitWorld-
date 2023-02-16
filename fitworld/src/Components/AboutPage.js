import React from "react";
import { Link } from "react-router-dom";
import Team from "./Team";

function AboutPage() {
  return (
    <div>
      <div className="home">
        <div
          className="background_image"
          style={{ backgroundImage: "url(images/about_page.jpg)" }}
        />
        <div className="overlay" />
        <div className="home_container">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="home_content">
                  <div className="home_title">About us</div>
                  <div className="home_subtitle">
                    Pilates, Yoga, Fitness, Spinning &amp; many more
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About */}
      <div className="about">
        <div className="container about_container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about_content">
                <div className="section_title_container">
                  <div className="section_subtitle">welcome to FitWorld</div>
                  <div className="section_title">
                    About <span>FitWorld</span>
                  </div>
                </div>
                <div className="text_highlight">
                  Etiam commodo justo nec aliquam feugiat. Donec a leo eget eget
                  augue porttitor sollicitudin augue porttitor sollicitudin.
                </div>
                <div className="about_text">
                  <p>
                    Morbi sed varius risus, vitae molestie lectus. Donec id
                    hendrerit velit, eu fringilla neque. Etiam id finibus
                    sapien. Donec sollicitudin luctus ex non pharetra. Aenean
                    lobortis ut leo vel porta. Maecenas ac vestibulum lectus.
                    Cras nulla urna, lacinia ut tempor facilisis, congue
                    dignissim tellus. Maecenas ac vestibulum lectus. Cras nulla
                    urna, lacinia ut tempor facilisis, congue dignissim tellus.
                    Phasellus sit amet justo ullamcorper, elementum ipsum nec.
                  </p>
                </div>
                <div className="button about_button">
                  <Link to="/join">Join Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about_background">
          <div className="container fill_height">
            <div className="row fill_height">
              <div className="col-lg-6 offset-lg-6 fill_height">
                <div className="about_image">
                  <img src="images/a1.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team */}
      <div>
        <Team />
      </div>
    </div>
  );
}

export default AboutPage;
