import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { BasketItem } from "./redux/slice";
import { getBasketTotal } from "./common/common";

function Subtotal() {
  const basket = useSelector<RootState>(
    (state) => state.basket
  ) as BasketItem[];
  const totalItems = useSelector<RootState>(
    (state) => state.noOfItemsInCart
  ) as number;
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({totalItems} {totalItems > 1 ? "items" : "item"}) :
              <strong> {value} </strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" /> This Order contains gift
            </small>
          </>
        )}
        value={getBasketTotal(basket)}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
