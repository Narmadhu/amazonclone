import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { BasketItem } from "../../redux/slice/cartSlice";
import { getBasketTotal } from "../../common/common";

function Subtotal() {
  const basket = useSelector<RootState>(
    (state) => state.Cart.basket
  ) as BasketItem[];
  const totalItems = useSelector<RootState>(
    (state) => state.Cart.noOfItemsInCart
  ) as number;

  const handlePayment = async () => {
    const response = await fetch("http://localhost:8000/payment", {
      method: "POST",
      body: JSON.stringify(basket),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (data.url) {
      window.location.assign(data.url);
    }
  };

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
      <button onClick={handlePayment}>Pay now</button>
    </div>
  );
}

export default Subtotal;
