import { BASKET_LOAD_SUCCESSFULLY } from "../../../utils/constants/actionTypes";

import { BasketState, BasketAction, Basket } from "../../../interface/Basket";

const initialState: BasketState = {
  loading: true,
  error: null,
  basket: null,
  totalSum: 0,
};

const GetTotalSum = (basket: any) => {
  if (basket) {
    let data =
      basket?.items.length > 0
        ? basket.items.reduce(
            (sum: number, item: any) => sum + item?.quantity * item?.price,
            0
          )
        : 0;
    return data;
  }
  return 0;
};

const reducers = (state = initialState, action: BasketAction) => {
  switch (action.type) {
    case BASKET_LOAD_SUCCESSFULLY:
      return {
        ...state,
        basket: action.payload,
        loading: false,
        totalSum: GetTotalSum(action.payload),
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducers;
