import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-wrapper">
        <div className="footer-schemes f-s-one">
          <h4>about us</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            odio incidunt eaque ipsam ex enim molestias tempore excepturi veniam
            rerum.
          </p>
        </div>
        <div className="footer-schemes f-s-two">
          <h4>about us</h4>
          <li>Team</li>
          <li>Join us</li>
          <li>ethics</li>
          <li>goals</li>
        </div>
        <div className="footer-schemes f-s-three">
          <h4>menu</h4>
          <li>combos</li>
          <li>reservation</li>
          <li>our chef</li>
          <li>contact</li>
        </div>
        <div className="footer-schemes f-s-four">
          <h4>we are here</h4>
          <li>123 Main Street</li>
          <li>741258</li>
        </div>
        <div className="footer-schemes f-s-five">
          <h4>Open Daily</h4>
          <li>Every day from</li>
          <li>11 AM to 10 PM</li>
        </div>
        <div className="footer-schemes f-s-six">
          <h4>Call us</h4>
          <li>+34 123 456 789</li>
        </div>
        <div className="footer-schemes f-s-seven">
          <h4>say hello</h4>
          <li>hello@yourwebsite.com</li>
          <li>www.yourwebsite.com</li>
        </div>
        <div className="footer-schemes f-s-eight">
          <input type="email" id="footer-email" placeholder="E-Mail" />
          <button>Subscribe</button>
        </div>
        <div className="footer-schemes f-s-nine">
          <h4>follow us</h4>
        </div>
        <div className="footer-schemes f-s-ten">
          <FaFacebookF className="icons" />
          <FaInstagram className="icons" />
          <FaTwitter className="icons" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
