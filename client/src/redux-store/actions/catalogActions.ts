import { requestPayload } from "../../interface/Catalog";
import { CATALOG_REQUEST } from "../../utils/constants/actionTypes";

export const getCatalogRequest = (payload?: requestPayload) => ({
  type: CATALOG_REQUEST,
  payload: payload,
});
