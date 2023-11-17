import React, { useState } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { BasketItem } from "../../redux/slice/cartSlice";
import { getBasketTotal } from "../../common/common";
import SnackBar from "../materialui/SnackBar";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const basket = useSelector<RootState>(
    (state) => state.Cart.basket
  ) as BasketItem[];
  const totalItems = useSelector<RootState>(
    (state) => state.Cart.noOfItemsInCart
  ) as number;
  const user = useSelector<RootState>((state) => state.User.user) as number;
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    severity: "error" | "info" | "success" | "warning" | undefined;
    msg: string;
  }>({
    open: false,
    severity: undefined,
    msg: "",
  });

  const handlePayment = async () => {
    if (user) {
      const response = await fetch(
        "https://e-commerce-demo-vesl.onrender.com/payment",
        {
          method: "POST",
          body: JSON.stringify(basket),
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
      if (data.url) {
        window.location.assign(data.url);
      }
    } else {
      setSnackbar({
        open: true,
        severity: "error",
        msg: "Please Login and make the payment",
      });
      setTimeout(() => {
        history.push("/login");
      }, 2000);
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
      <button className="payment" onClick={handlePayment}>
        Pay now
      </button>
      <SnackBar
        openSnackbar={snackbar.open}
        handleClose={() => setSnackbar({ ...snackbar, open: false })}
        severity={snackbar.severity}
        message={snackbar.msg}
      />
    </div>
  );
}

export default Subtotal;
