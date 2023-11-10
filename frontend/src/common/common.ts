import { BasketItem } from "../redux/slice/slice";

export const getBasketTotal = (basket: BasketItem[]) =>
  basket?.reduce(
    (amount, item) => item.price * item?.noOfProducts! + amount,
    0
  );
