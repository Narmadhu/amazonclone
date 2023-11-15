import React from "react";
import StarIcon from "@material-ui/icons/Star";
import { yellow } from "@material-ui/core/colors";
import "./Checkoutproducts.css";
import { useDispatch } from "react-redux";
import { removeItemToCart, updateItemsInCart } from "../../redux/slice/cartSlice";

function Checkoutproducts({ id, title, rating, rate, img, noOfProducts }) {
  const dispatch = useDispatch();
  const RemoveFromTheBasket = () => {
    dispatch(removeItemToCart(id));
    dispatch(updateItemsInCart("remove"));
  };
  return (
    <div className="checkoutproducts">
      <img className="checkoutproduct-img" src={img} alt="" />
      <div className="checkoutproduct-info">
        <p className="checkoutproduct-title">
          {title}
          {noOfProducts > 1 && ` (${noOfProducts})`}
        </p>
        <p className="checkoutproduct-rate">
          <small>$</small>
          <strong>{rate}</strong>
        </p>
        <div className="checkoutproduct-rating">
          {/* {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <StarIcon style={{ color: yellow[400], fontSize: 22 }} />
              </p>
            ))} */}
        </div>
        <button className="checkoutproduct-btn" onClick={RemoveFromTheBasket}>
          Remove from the cart
        </button>
      </div>
    </div>
  );
}

export default Checkoutproducts;
