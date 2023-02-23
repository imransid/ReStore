import {
  CATALOG_FILTER_ITEM_LOAD_SUCCESSFULLY,
  CATALOG_REQUEST,
} from "../utils/constants/actionTypes";

import { Product } from "./Product";

export interface sortOption {
  value: string;
  label: string;
}
export interface CatalogState {
  loading: boolean;
  brands: string[];
  types: string[];
  products: Array<Product>;
  sortOptions: sortOption[];
  appState: string;
  requestPayload: requestPayload;
}

interface payload {
  brands: string[];
  types: string[];
}

export interface requestPayload {
  pageNumber?: number;
  pageSize?: number;
  searchTerm?: string;
  oderBy?: string;
  brands?: string[];
  types?: string[];
}

export interface GetFilterItemSuccess {
  type: typeof CATALOG_FILTER_ITEM_LOAD_SUCCESSFULLY;
  payload: payload;
  products: Array<Product>;
}

export interface GetFilterItem {
  type: typeof CATALOG_REQUEST;
  payload?: requestPayload;
}

export type CatalogAction = GetFilterItemSuccess | GetFilterItem;
