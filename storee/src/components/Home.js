import React from "react";
import Banner from "../assets/banner.jpg";
import Product from "./Product.js";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__banner"
          src={Banner}
          alt="https://www.freepik.com/free-vector/opening-soon-background-template_7937678.htm#page=1&query=coming%20soon&position=15"
        />
        <div className="home__row">
          <Product
            title="Laundry Essentials"
            price={15.99}
            rating={4}
            image="https://image.freepik.com/free-photo/plastic-detergent-container-white-background_1205-1648.jpg"
          />
          <Product />
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row">
          {" "}
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
