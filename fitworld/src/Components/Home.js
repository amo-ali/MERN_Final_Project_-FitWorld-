import React from "react";
import { Link } from "react-router-dom";
import Box from "./Box";

function Home() {
  return (
    <div>
      <div className="home">
        <div
          className="background_image"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(images/index.jpg)",
          }}
        />
        <div className="overlay" />
        <div className="home_container">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="home_content text-center">
                  <div className="home_title">Get fit with us</div>
                  <div className="home_subtitle">
                    Pilates, Yoga, Fitness, Spinning &amp; many more
                  </div>
                  <div className="button home_button ml-auto mr-auto">
                    <Link to="/join">Join Us</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Box />
    </div>
  );
}

export default Home;
