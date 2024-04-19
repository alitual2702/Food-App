import React from "react";
import "./creator.css";
const Creator = () => {
  return (
    <div className="creator-section">
      <div className="creator-wrapper">
        <h3 className="creator-title">the creators</h3>

        <div className="creator-flex-div">
          <div className="left-name-creator">
            <div className="name-creators">
              <p className="nested-p">p</p>
              <div className="nested-name-creator">
                <h4 className="nested-name-creator-title">name creator</h4>
                <p className="nested-name-creator-discrip">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>

            <div className="name-creators">
              <p className="nested-p-two">p</p>
              <div className="nested-name-creator">
                <h4 className="nested-name-creator-title">name creator</h4>
                <p className="nested-name-creator-discrip">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>

          <div className="right-web-logo-two">
            <img
              src="\images\food-img-black.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creator;
