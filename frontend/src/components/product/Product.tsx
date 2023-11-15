import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { yellow } from "@material-ui/core/colors";
import { useDispatch } from "react-redux";
import { addItemToCart, updateItemsInCart } from "../../redux/slice/cartSlice";

function Product({ id, title, rating, rate, img }) {
  const dispatch = useDispatch();

  const addToBasket = () => {
    dispatch(
      addItemToCart({
        id: id,
        title: title,
        rating: rating,
        rate: rate,
        img: img,
      })
    );
    dispatch(updateItemsInCart("add"));
  };

  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-rate">
          <small>$</small>
          <strong>{rate}</strong>
        </p>
        <div className="product-rating">
          {/* {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <StarIcon style={{ color: yellow[400], fontSize: 22 }} />
              </p>
            ))} */}
        </div>
      </div>

      <img src={img} alt="" />
      <button onClick={addToBasket}>Add to cart</button>
    </div>
  );
}

export default Product;
