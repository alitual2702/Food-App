import React from "react";
import "./foodf.css";
const Formfood = () => {
  return (
    <div className="food-form-sec">
      <div className="form-wrapper">
        <h2 className="form-title">Make a reservation</h2>

        <form className="form-div">
          <select name="limit-people" className="form-inputs">
            <option value="2-peoples">2 peoples</option>
            <option value="3-peoples">3 peoples</option>
            <option value="4-peoples">4 peoples</option>
            <option value="5-peoples">5 peoples</option>
            <option value="6-peoples">6 peoples</option>
          </select>
          <input
            type="date"
            defaultValue="2018-07-22"
            className="form-inputs"
          />
          <input type="time" defaultValue="11:00" className="form-inputs" />
          <input type="text" className="form-inputs" placeholder="Name" />
          <input type="email" className="form-inputs" placeholder="Email" />
          <input type="tel" className="form-inputs" placeholder="Phone" />
          <button className="btn-submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Formfood;
