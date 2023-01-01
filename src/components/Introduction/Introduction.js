import React from "react";
import interactive_desktop from "../../images/desktop/image-interactive.jpg";
import interactive_mobile from "../../images/mobile/image-interactive.jpg";
import "./Introduction.css";

const Introduction = () => {
  return (
    <>
      <div className="interactive-section">
        <div className="row">
          <div className="col-lg-4 col-sm-12">
            <img
              className="interactive-desktop-illustration"
              src={interactive_desktop}
              alt="interactive"
            />
            <img
              className="interactive-mobile-illustration"
              src={interactive_mobile}
              alt="interactive mobile"
            />
          </div>
          <div className="col-lg-4 col-sm-12 interactive-desc">
            <h3>The leader in interactive VR</h3>
            <p>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

// <img src={interactive} alt="interactive" />

export default Introduction;
