import React from "react";
import StarIcon from "@material-ui/icons/Star";
import { yellow } from "@material-ui/core/colors";
import "./Checkoutproducts.css";
import { useDispatch } from "react-redux";
import { removeItemToCart } from "./redux/slice";

function Checkoutproducts({ id, title, rate, price, img }) {
  const dispatch = useDispatch();
  const RemoveFromTheBasket = () => {
    dispatch(removeItemToCart(id));
  };
  return (
    <div className="checkoutproducts">
      <img className="checkoutproduct-img" src={img} alt="" />
      <div className="checkoutproduct-info">
        <p className="checkoutproduct-title">{title}</p>
        <p className="checkoutproduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutproduct-rate">
          {Array(rate)
            .fill()
            .map((_) => (
              <p>
                <StarIcon style={{ color: yellow[400], fontSize: 22 }} />
              </p>
            ))}
        </div>
        <button className="checkoutproduct-btn" onClick={RemoveFromTheBasket}>
          Remove from the cart
        </button>
      </div>
    </div>
  );
}

export default Checkoutproducts;
