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
import deep_earth_mobile from "../../images/mobile/image-deep-earth.jpg";
import night_arcade_mobile from "../../images/mobile/image-night-arcade.jpg";
import soccer_team_mobile from "../../images/mobile/image-soccer-team.jpg";
import grid_mobile from "../../images/mobile/image-grid.jpg";
import from_above_mobile from "../../images/mobile/image-from-above.jpg";
import pocket_borealis_mobile from "../../images/mobile/image-pocket-borealis.jpg";
import curiosity_team_mobile from "../../images/mobile/image-curiosity.jpg";
import fisheye_mobile from "../../images/mobile/image-fisheye.jpg";

const Creations = () => {
  return (
    <>
      <section className="creations">
        <div className="creations-intro">
          <h3>Our creations</h3>
          <button className="creations-btn desktop-btn">See all</button>
        </div>

        <div className="creations-cards-container">
          <div className="row">
            <div className="col-lg-3 col-sm-12 col-md-6">
              <img className="desktop-img" src={deep_earth} alt="deep-earth" />
              <img
                className="mobile-img"
                src={deep_earth_mobile}
                alt="deep-earth-mobile"
              />
              <p>Deep earth</p>
            </div>
            <div className="col-lg-3 col-sm-12 col-md-6">
              <img
                className="desktop-img"
                src={night_arcade}
                alt="night-arcade"
              />
              <img
                className="mobile-img"
                src={night_arcade_mobile}
                alt="night-arcade"
              />
              <p>Night arcade</p>
            </div>
            <div className="col-lg-3 col-sm-12 col-md-6">
              <img
                className="desktop-img"
                src={soccer_team}
                alt="soccer-team"
              />
              <img
                className="mobile-img"
                src={soccer_team_mobile}
                alt="soccer-team"
              />
              <p>Soccer team VR</p>
            </div>
            <div className="col-lg-3 col-sm-12 col-md-6">
              <img className="desktop-img" src={grid} alt="grid" />
              <img className="mobile-img" src={grid_mobile} alt="grid-mobile" />
              <p>The grid</p>
            </div>
          </div>

          {/* 2nd row */}
          <div className="row">
            <div className="col-lg-3 col-sm-12 col-md-6">
              <img className="desktop-img" src={from_above} alt="from above" />
              <img
                className="mobile-img"
                src={from_above_mobile}
                alt="fromabove"
              />
              <p>From up above VR</p>
            </div>
            <div className="col-lg-3 col-sm-12 col-md-6">
              <img
                className="desktop-img"
                src={pocket_borealis}
                alt="pocket borealis"
              />
              <img
                className="mobile-img"
                src={pocket_borealis_mobile}
                alt="pocket borealis"
              />
              <p>Pocket borealis</p>
            </div>
            <div className="col-lg-3 col-sm-12 col-md-6">
              <img className="desktop-img" src={curiosity} alt="curosity" />
              <img
                className="mobile-img"
                src={curiosity_team_mobile}
                alt="curosity"
              />
              <p>The curiosity</p>
            </div>
            <div className="col-lg-3 col-sm-12 col-md-6">
              <img className="desktop-img" src={fisheye} alt="fisheye" />
              <img className="mobile-img" src={fisheye_mobile} alt="fisheye" />
              <p>Make it fisheye</p>
            </div>
          </div>
        </div>

        <button className="creations-btn mobile-btn">See all</button>
      </section>
    </>
  );
};

export default Creations;
