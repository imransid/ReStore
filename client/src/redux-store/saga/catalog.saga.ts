import { AxiosResponse } from "axios";
import { call, put, select, SelectEffect } from "redux-saga/effects";
import agent from "../../utils/api";
import { CATALOG_FILTER_ITEM_LOAD_SUCCESSFULLY } from "../../utils/constants/actionTypes";
import { RootState } from "../reducers";
import _ from "lodash";
import { CatalogState } from "../../interface/Catalog";

// export const getProject = (state: any) => state.catalog.requestPayload;

function* mySaga(): Generator<SelectEffect, any, any> {
  const myValue: CatalogState = yield select(
    (state: RootState) => state.catalog
  );

  return myValue;
}

//RootState
export const _catalogItemLoad = function* (action: any) {
  try {
    const catalogState: CatalogState = yield call(mySaga);

    let pageNumber = 1;
    let pageSize = 6;
    let searchTerm;
    let oderBy;
    let brands = [];
    let types = [];

    pageNumber =
      action?.payload?.pageNumber === undefined
        ? catalogState.requestPayload?.pageNumber
          ? catalogState.requestPayload?.pageNumber
          : 1
        : action?.payload?.pageNumber;

    pageSize =
      action?.payload?.pageSize === undefined
        ? catalogState.requestPayload?.pageSize
          ? catalogState.requestPayload?.pageSize
          : 6
        : action?.payload?.pageSize;
    searchTerm =
      action?.payload?.searchTerm === undefined
        ? catalogState.requestPayload?.searchTerm
          ? catalogState.requestPayload?.searchTerm
          : ""
        : action?.payload?.searchTerm;
    oderBy =
      action?.payload?.oderBy === undefined
        ? catalogState.requestPayload?.oderBy
          ? catalogState.requestPayload?.oderBy
          : ""
        : action?.payload?.oderBy;
    brands =
      action?.payload?.brands === undefined
        ? catalogState.requestPayload?.brands
          ? catalogState.requestPayload?.brands
          : []
        : action?.payload?.brands;
    types =
      action?.payload?.types === undefined
        ? catalogState.requestPayload?.types
          ? catalogState.requestPayload?.types
          : 1
        : action?.payload?.types;

    const param = new URLSearchParams();

    const delimiter = ",";

    const valuesStringBrands = brands.length > 0 ? brands.join(delimiter) : [];
    const valuesStringTypes = types.length > 0 ? types.join(delimiter) : [];

    param.append("pageNumber", pageNumber.toString());
    param.append("pageSize", pageSize.toString());
    param.append("orderBy", oderBy.toString());
    if (searchTerm != "") param.append("searchTerm", searchTerm.toString());
    if (brands.length > 0)
      param.append("brands", valuesStringBrands.toString());
    if (types.length > 0) param.append("types", valuesStringTypes.toString());

    const responseList: AxiosResponse = yield call(agent.Catalog.list, param);
    const responseFilterItem: AxiosResponse = yield call(
      agent.Catalog.filterItem
    );

    if (responseFilterItem && responseList && _.has(responseList, "items")) {
      yield put({
        type: CATALOG_FILTER_ITEM_LOAD_SUCCESSFULLY,
        payload: responseFilterItem,
        products: responseList,
      });
    }
    //   } else {
    //     yield put({
    //       type: SIGH_IN_ERROR,
    //       payload: {
    //         msg: authStatus.msg,
    //       },
    //     });
    //   }
  } catch (err) {
    console.log("Error in _catalogItemLoad", err);
  }
};
