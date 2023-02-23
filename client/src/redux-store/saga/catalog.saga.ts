import { AxiosResponse } from "axios";
import { call, put, select } from "redux-saga/effects";
import agent from "../../utils/api";
import { CATALOG_FILTER_ITEM_LOAD_SUCCESSFULLY } from "../../utils/constants/actionTypes";

export const _catalogItemLoad = function* (action: any) {
  try {
    console.log(action?.payload?.searchTerm, "action");

    let pageNumber = 1;
    let pageSize = 6;
    let searchTerm =
      action?.payload?.searchTerm === undefined
        ? ""
        : action?.payload?.searchTerm;
    let oderBy = "name";
    let brands = "";
    let types = "";
    const param = new URLSearchParams();
    param.append("pageNumber", pageNumber.toString());
    param.append("pageSize", pageSize.toString());
    param.append("oderBy", oderBy.toString());
    if (searchTerm != "") param.append("searchTerm", searchTerm.toString());
    if (brands != "") param.append("brands", brands.toString());
    if (types != "") param.append("types", types.toString());

    const responseList: AxiosResponse = yield call(agent.Catalog.list, param);
    const responseFilterItem: AxiosResponse = yield call(
      agent.Catalog.filterItem
    );

    if (responseFilterItem && responseList) {
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
