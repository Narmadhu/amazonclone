import { BasketItem } from "../redux/slice/cartSlice";

export const getBasketTotal = (basket: BasketItem[]) =>
  basket?.reduce(
    (amount, item) => item.rate * item?.noOfProducts! + amount,
    0
  );
