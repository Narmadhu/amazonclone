import React from "react";
import "./Checkout.css";
import Checkoutproducts from "./Checkoutproducts";
import Subtotal from "./Subtotal";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function Checkout() {
  const basket = useSelector<RootState>((state) => state.basket);

  return (
    <div className="checkout">
      <div className="checkout-left">
        <img className="checkout-ad" src="/images/ad.jpg" alt="" />
        {basket?.length! === 0 ? (
          <div>
            <h2 className="checkout-title">Your Basket is empty</h2>
          </div>
        ) : (
          <div>
            <h2 className="checkout-title">
              Your basket contains {basket?.length!} items
            </h2>

            {/* list of products */}
            {basket.map((item) => (
              <Checkoutproducts
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rate={item.rate}
                img={item.img}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout-right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
