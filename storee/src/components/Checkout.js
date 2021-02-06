import React from "react";
import Ad from "../assets/adv.jpg";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={Ad} alt="" />
        <h2 className="checkout__title">
          <b>Your Shopping Basket</b>
        </h2>
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout__right">
        <div className="checkout__subtotal">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
