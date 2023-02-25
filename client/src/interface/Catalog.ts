import {
  CATALOG_FILTER_ITEM_LOAD_SUCCESSFULLY,
  CATALOG_REQUEST,
} from "../utils/constants/actionTypes";
import { MetaData } from "./Pagination";

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
  metaData?: MetaData;
}

interface payload {
  brands: string[];
  types: string[];
}

interface IObjectKeys {
  [key: string]: string | undefined | string[] | number;
}

export interface requestPayload extends IObjectKeys {
  pageNumber?: number;
  pageSize?: number;
  searchTerm?: string;
  oderBy?: string;
  brands?: string[];
  types?: string[];
}

export interface axiosData {
  items: Array<Product>;
  metaData: MetaData;
}

export interface GetFilterItemSuccess {
  type: typeof CATALOG_FILTER_ITEM_LOAD_SUCCESSFULLY;
  payload: payload;
  products: axiosData;
}

export interface GetFilterItem {
  type: typeof CATALOG_REQUEST;
  payload?: requestPayload;
}

export type CatalogAction = GetFilterItemSuccess | GetFilterItem;
