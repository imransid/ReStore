import {
  CATALOG_FILTER_ITEM_LOAD_SUCCESSFULLY,
  CATALOG_REQUEST,
} from "../../../utils/constants/actionTypes";

import { CatalogState, CatalogAction } from "../../../interface/Catalog";

const sortOptions = [
  {
    value: "name",
    label: "Alphabetical",
  },
  {
    value: "priceDesc",
    label: "Price - High to Low",
  },
  {
    value: "price",
    label: "Price - Low to High",
  },
];

const initialState: CatalogState = {
  loading: true,
  brands: [],
  types: [],
  products: [],
  sortOptions: sortOptions,
  appState: "initial",
  requestPayload: {
    pageNumber: 1,
    pageSize: 6,
    searchTerm: "",
    oderBy: "",
    brands: [],
    types: [],
  },
  metaData: {
    currentPage: 1,
    totalPages: 1,
    pageSize: 1,
    totalCount: 1,
  },
};

const reducers = (state = initialState, action: CatalogAction) => {
  switch (action.type) {
    case CATALOG_FILTER_ITEM_LOAD_SUCCESSFULLY:
      return {
        ...state,
        brands: action.payload.brands,
        types: action.payload.types,
        products: action.products.items,
        metaData: action.products.metaData,
        loading: false,
        appState: "loaded",
      };
    case CATALOG_REQUEST:
      return {
        ...state,
        loading: true,
        requestPayload: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducers;
