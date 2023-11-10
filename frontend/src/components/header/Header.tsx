import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";

function Header() {
  const totalItems = useSelector<RootState>(
    (state) => state.noOfItemsInCart
  ) as number;

  return (
    <nav className="header">
      {/* logo */}
      <Link to="/">
        <img className="amazon-logo" src="/images/amazon-logo.jpg" alt="" />
      </Link>
      {/* search */}
      <div className="header-search">
        <input type="text" className="header-search-bar" />
        <SearchIcon className="header-search-icon" />
      </div>
      {/* 3 links */}
      <div className="header-nav">
        {/* link 1 */}
        <Link to="/login" className="header-link">
          <div className="header-option">
            <span className="header-option-lineOne">Hello, Narmadhu </span>
            <span className="header-option-lineTwo">Sign In</span>
          </div>
        </Link>
        {/* link 2 */}
        <Link to="/" className="header-link">
          <div className="header-option">
            <span className="header-option-lineOne">Returns</span>
            <span className="header-option-lineTwo"> & Orders</span>
          </div>
        </Link>
        {/* link 3 */}
        <Link to="/" className="header-link">
          <div className="header-option">
            <span className="header-option-lineOne">Your</span>
            <span className="header-option-lineTwo">Prime</span>
          </div>
        </Link>
        {/* link 4 */}
        <Link to="/checkout" className="header-link">
          <div className="header-optionBasket">
            <ShoppingBasketOutlinedIcon className="" />
            <span className="header-option-lineTwo header-basketCount">
              {totalItems}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
