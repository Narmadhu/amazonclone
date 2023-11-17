import React from "react";
import "./Checkout.css";
import Checkoutproducts from "../checkoutproducts/Checkoutproducts";
import Subtotal from "../subTotal/Subtotal";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { BasketItem } from "../../redux/slice/cartSlice";

function Checkout() {
  const basket = useSelector<RootState>(
    (state) => state.Cart.basket
  ) as BasketItem[];
  const totalItems = useSelector<RootState>(
    (state) => state.Cart.noOfItemsInCart
  ) as number;

  return (
    // <div className="checkout">
    <>
      {/* <img className="checkout-ad" src="/images/ad.jpg" alt="" /> */}
      {basket.length === 0 ? (
        <div>
          <h2 className="checkout-title">Your Basket is empty</h2>
        </div>
      ) : (
        <div className="checkout">
          <div className="checkout-left">
            <h2 className="checkout-title">
              {`Your basket contains ${totalItems} ${
                totalItems > 1 ? "items" : "item"
              }`}
            </h2>

            {/* list of products */}
            {basket.map((item) => (
              <Checkoutproducts
                key={item.id}
                id={item.id}
                title={item.title}
                rate={item.rate}
                rating={item.rating}
                img={item.img}
                noOfProducts={item.noOfProducts}
              />
            ))}
          </div>
          <div className="checkout-right">
            <Subtotal />
          </div>
        </div>
      )}
    </>
  );
}

export default Checkout;
