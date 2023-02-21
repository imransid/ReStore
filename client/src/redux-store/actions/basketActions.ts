import { Basket } from "../../interface/Basket";
import {
  BASKET_REQUEST,
  BASKET_LOAD_SUCCESSFULLY,
} from "../../utils/constants/actionTypes";

export const getBasketRequest = () => ({
  type: BASKET_REQUEST,
});

export const updateBasket = (basket: Basket) => ({
  type: BASKET_LOAD_SUCCESSFULLY,
  payload: basket,
});
