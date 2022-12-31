import React from "react";
import interactive from "../../images/desktop/image-interactive.jpg";
import "./Introduction.css";

const Introduction = () => {
  return (
    <>
      <div className="interactive-section">
        <div className="row">
          <div className="col-4">
            <img
              className="interactive-illustration"
              src={interactive}
              alt="interactive"
            />
          </div>
          <div className="col-4 interactive-desc">
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
