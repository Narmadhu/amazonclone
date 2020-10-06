import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { yellow } from "@material-ui/core/colors";
import { useStateValue } from "./StateProvider";

function Product({ id, title, rate, price, img }) {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        rate: rate,
        price: price,
        img: img,
      },
    });
  };

  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rate">
          {Array(rate)
            .fill()
            .map((_) => (
              <p>
                <StarIcon style={{ color: yellow[400], fontSize: 22 }} />
              </p>
            ))}
        </div>
      </div>

      <img src={img} alt="" />
      <button onClick={addToBasket}>Add to cart</button>
    </div>
  );
}

export default Product;
