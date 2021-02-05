import React from "react";
import Ad from "../assets/adv.jpg";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={Ad} alt="" />
        <div className="checkout__title">
          <b>Your Shopping Basket</b>
        </div>
      </div>
      <div className="checkout__right">
        <div className="checkout__subtotal">
          <Subtotal />
          {/*BasketItem*/}
          {/*BasketItem*/}
          {/*BasketItem*/}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
