import React from "react";
import "./Creations.css";
import deep_earth from "../../images/desktop/image-deep-earth.jpg";

const Creations = () => {
  return (
    <>
      <section className="creations">
        <div className="creations-intro">
          <h3>Our creations</h3>
          <button className="creations-btn">See all</button>
        </div>

        <div className="creations-cards-container">
          <div className="row">
            <div className="col">
              <img src={deep_earth} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Creations;
