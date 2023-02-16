import React from "react";
import Team from "./Team";

function TeamPage() {
  return (
    <div>
      <div className="home">
        <div
          className="background_image"
          style={{ backgroundImage: "url(images/blog_page.jpg)" }}
        />
        <div className="overlay" />
        <div className="home_container">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="home_content">
                  <div className="home_title">Team</div>
                  <div className="home_subtitle">
                    Pilates, Yoga, Fitness, Spinning &amp; many more
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Team />
    </div>
  );
}

export default TeamPage;
