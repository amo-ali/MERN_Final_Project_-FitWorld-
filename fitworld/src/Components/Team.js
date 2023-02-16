import React from "react";

function Team() {
  return (
    <div>
      <div className="team">
        <div
          className="parallax_background parallax-window"
          data-parallax="scroll"
          style={{
            backgroundImage: "url(images/blog.jpg)",
          }}
          // data-image-src="images/blog.jpg"
          data-speed="0.8"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section_title_container">
                <div className="section_subtitle">welcome to sportfit</div>
                <div className="section_title text-white">The Team</div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="row ">
              <div className="col-4 team1">
                <img src="images/team_1.jpg" alt="" />
                <div className="team_panel d-flex flex-column align-items-center justify-content-center text-center">
                  <div className="team_name">
                    <span>Michael Smith</span>
                  </div>
                  <div className="team_title">Trainer</div>
                </div>
              </div>
              <div className="col-4 team1">
                <img src="images/team_2.jpg" alt="" />
                <div className="team_panel d-flex flex-column align-items-center justify-content-center text-center">
                  <div className="team_name">
                    <span>Simone Parker</span>
                  </div>
                  <div className="team_title">Trainer</div>
                </div>
              </div>
              <div className="col-4 team1">
                <img src="images/team_3.jpg" alt="" />
                <div className="team_panel d-flex flex-column align-items-center justify-content-center text-center">
                  <div className="team_name">
                    <span>William James</span>
                  </div>
                  <div className="team_title">Trainer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
