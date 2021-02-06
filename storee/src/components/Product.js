import React from "react";
import StarsIcon from "@material-ui/icons/Stars";
import ProductImg from "../assets/product.jpg";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  //add to array
  console.log("this is the basket >>>", basket);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    //send the item into data
  };
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__info--name">{title}</p>
        <p className="product__info--price">
          <small>$</small>
          <strong>{price}</strong>
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
      </div>
      <img
        className="product__info--img"
        src={image}
        alt="https://www.freepik.com/free-photo/front-view-beauty-products-packaging_12257442.htm#page=1&query=product&position=9"
      />
      <button className="product__info--btn" onClick={addToBasket}>
        <AddShoppingCartIcon /> <p>Add to Cart</p>
      </button>
    </div>
  );
}

Product.defaultProps = {
  id: 12345,
  title: "3Pcs Batroom Stuff",
  image: ProductImg,
  price: 17.78,
  rating: 3,
};

export default Product;
