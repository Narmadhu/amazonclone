import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { BasketItem } from "./redux/slice";

function Subtotal() {
  const basket = useSelector<RootState>(
    (state) => state.basket
  ) as BasketItem[];
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) :<strong> {value} </strong>
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
