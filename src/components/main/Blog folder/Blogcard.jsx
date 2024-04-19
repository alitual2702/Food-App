import React from "react";

const Blogcard = ({ cardDate }) => {
  return (
    <div className="blog-card-numberwie">
      <div className="card-img">
        <img src="/images/plate-food.png" />
      </div>
      <li>{cardDate}</li>
      <p className="p-bold"> Lorem ipsum dolor sit.</p>
      <p className="p-light">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. sed
      </p>
      <button className="card-btn">read more</button>
    </div>
  );
};

export default Blogcard;
