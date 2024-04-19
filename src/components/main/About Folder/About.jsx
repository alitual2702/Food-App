import React from "react";
import "./about.css";
const About = () => {
  return (
    <div className="about-section">
      <div className="about-wrapper">
          <img src="/images/fries.png" className="fries-about" />
          
        <div className="right-about-discription">
          <h2 className="about-title">About us</h2>
          <p className="about-para">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
            ducimus aut repellendus dicta ad consequuntur, reiciendis sit
            laboriosam possimus pariatur, nam blanditiis nostrum veniam
            architecto perferendis ea vero!
          </p>
          <p className="about-para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
            necessitatibus ratione ut quod, deleniti aliquid reiciendis id eum
            animi praesentium harum. Fuga inventore at nam repellendus unde ipsa
            laudantium doloremque iste, a fugit eveniet?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
