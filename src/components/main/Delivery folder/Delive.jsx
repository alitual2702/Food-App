import React from "react";
import "./delorder.css";
import Order from "./Order";
import Freedelive from "./free delivery/Freedelive";
const Delive = () => {
  return (
    <div className="delivery-section">
      <div className="del-wrapper">
        <div className="order-div">
          <h2 className="order-title">how do you order our burgers?</h2>
          <div className="order-flex">
            <Order
              order_t="choose"
              order_discription="Choose what you prefer
              from our Menu. if you don't want to think choose disrectly a Combo."
            />

            <Order
              order_t="order"
              order_discription="You can order food online or if you prefer, you can go into our restaurant."
            />

            <Order
              order_t="delivery"
              order_discription="Pick up your order in one of our restaurants or have it delivered in your home."
            />
          </div>
        </div>



        <div className="free-delivery">
          <Freedelive />
        </div>
      </div>
    </div>
  );
};

export default Delive;
