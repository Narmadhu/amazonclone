import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";

function Header() {
  const totalItems = useSelector<RootState>(
    (state) => state.Cart.noOfItemsInCart
  ) as number;

  const loggedUser = useSelector<RootState>(
    (state) => state.User.user
  ) as string;

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
        {loggedUser ? (
          <div className="header-option">
            <span className="header-option-lineOne" style={{ color: "white" }}>
              Hello,
            </span>
            <span className="header-option-lineTwo header-link">
              {loggedUser}
            </span>
          </div>
        ) : (
          <div className="header-option">
            <Link to="/login" className="header-link">
              <span className="header-option-lineOne">LOG IN</span>
            </Link>
          </div>
        )}

        {/* link 2 */}
        {/* <Link to="/" className="header-link">
          <div className="header-option">
            <span className="header-option-lineOne">Returns</span>
            <span className="header-option-lineTwo"> & Orders</span>
          </div>
        </Link> */}

        {/* link 3 */}
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
