import React from "react";
import StarsIcon from "@material-ui/icons/Stars";
import ClearIcon from "@material-ui/icons/Clear";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    //remove item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct ">
      <img className="checkoutProduct__image" src={image} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small> <strong>{price}</strong>
        </p>
        <div className="product__info--rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarsIcon className="product__info--rate" />
              </p>
            ))}
        </div>
        <button onClick={removeFromBasket} className="checkoutProduct__button">
          Remove from Basket
          <ClearIcon />
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
