import React from "react";
import Logo from "../assets/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={Logo} alt="saveonall logo" />
      <div className="header__search">
        <input className="header__search--input" type="text" />
        <SearchIcon className="header__search--icon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__option--lineOne">Hello Guest</span>
          <span className="header__option--lineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__option--lineOne">Returns</span>
          <span className="header__option--lineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__option--lineOne">Your</span>
          <span className="header__option--lineTwo">Prime</span>
        </div>
        <div className="header__option--basket">
          <ShoppingBasketIcon />
          <span className="header__option--lineTwo header__option--basketCount ">
            0
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
