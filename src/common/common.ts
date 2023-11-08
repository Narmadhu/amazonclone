import { BasketItem } from "../redux/slice";

export const getBasketTotal = (basket: BasketItem[]) =>
  basket?.reduce(
    (amount, item) => item.price * item?.noOfProducts! + amount,
    0
  );
