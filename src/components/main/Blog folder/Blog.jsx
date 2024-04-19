import React from "react";
import Blogcard from "./Blogcard";
import "./blog.css";
const Blog = () => {
  return (
    <div className="blog-section">
      <div className="blog-wrapper">
      
        <h2 className="blog-title">burger blog</h2>
        <p className="burger-discrip">Discover the best Burger recipes</p>
        <div className="burger-blog-cards-flex">
          <Blogcard
            cardDate="Classic Burger / 26th May, 2020"
          />
          <Blogcard
            cardDate="Cheese Burger / 26th May, 2020"
          />
          <Blogcard
            cardDate="Double Cheese Burger / 23th May, 2020"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
