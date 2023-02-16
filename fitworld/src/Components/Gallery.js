import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Services from "./Services";
function Gallery() {
  return (
    <div>
      <div className="gallery">
        <OwlCarousel className="owl-theme" items={3} margin={5} autoplay>
          <div className="item">
            <div id="pic1"></div>
          </div>

          <div className="item">
            <div id="pic2"></div>
          </div>

          <div className="item">
            <div id="pic3"></div>
          </div>

          <div className="item">
            <div id="pic4"></div>
          </div>

          <div className="item">
            <div id="pic5"></div>
          </div>
        </OwlCarousel>
      </div>
      <Services />
    </div>
  );
}

export default Gallery;
