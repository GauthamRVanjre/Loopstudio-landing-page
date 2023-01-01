import React from "react";
import "./Creations.css";
import deep_earth from "../../images/desktop/image-deep-earth.jpg";
import night_arcade from "../../images/desktop/image-night-arcade.jpg";
import soccer_team from "../../images/desktop/image-soccer-team.jpg";
import grid from "../../images/desktop/image-grid.jpg";
import from_above from "../../images/desktop/image-from-above.jpg";
import pocket_borealis from "../../images/desktop/image-pocket-borealis.jpg";
import curiosity from "../../images/desktop/image-curiosity.jpg";
import fisheye from "../../images/desktop/image-fisheye.jpg";

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
              <img src={deep_earth} alt="deep-earth" />
              <p>Deep earth</p>
            </div>
            <div className="col">
              <img src={night_arcade} alt="night-arcade" />
              <p>Night arcade</p>
            </div>
            <div className="col">
              <img src={soccer_team} alt="soccer-team" />
              <p>Soccer team VR</p>
            </div>
            <div className="col">
              <img src={grid} alt="grid" />
              <p>The grid</p>
            </div>
          </div>

          {/* 2nd row */}
          <div className="row">
            <div className="col">
              <img src={from_above} alt="from above" />
              <p>From up above VR</p>
            </div>
            <div className="col">
              <img src={pocket_borealis} alt="pocket borealis" />
              <p>Pocket borealis</p>
            </div>
            <div className="col">
              <img src={curiosity} alt="curosity" />
              <p>The curiosity</p>
            </div>
            <div className="col">
              <img src={fisheye} alt="fisheye" />
              <p>Make it fisheye</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Creations;
