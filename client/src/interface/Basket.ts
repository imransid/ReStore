import { BASKET_LOAD_SUCCESSFULLY } from "../utils/constants/actionTypes";
export interface Item {
  productId: number;
  name: string;
  price: number;
  pictureUrl: string;
  brand: string;
  type: string;
  quantity: number;
}

export interface Basket {
  id: number;
  buyerId: string;
  items: Item[];
}

export interface BasketState {
  loading: boolean;
  basket: Basket | null;
  error: string | null;
  totalSum: number;
}

export interface Payload {
  values: Basket;
}

export interface GetBasketRequestSuccess {
  type: typeof BASKET_LOAD_SUCCESSFULLY;
  payload: Payload;
}

export type BasketAction = GetBasketRequestSuccess;
