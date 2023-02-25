import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { PaginatedResponse } from "../../interface/Pagination";

axios.defaults.baseURL = "http://localhost:9483/api/";
axios.defaults.withCredentials = true;
const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use(
  (response) => {
    let pagination = response.headers["pagination"];
    let items;
    if (pagination) {
      response.data = new PaginatedResponse(
        response.data,
        JSON.parse(pagination)
      );
    }

    return response;
  },
  (error: AxiosError) => {
    let dataIs: any = error.response?.data;
    toast.error(dataIs.title);
    return Promise.reject(error.response);
  }
);

const request = {
  get: (url: string, params?: URLSearchParams) =>
    axios.get(url, { params }).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
};

const Catalog = {
  list: (params?: URLSearchParams) => request.get("products", params),
  details: (id: number) => request.get(`products/${id}`),
  filterItem: () => request.get("products/filters"),
};

const Basket = {
  get: () => request.get("basket"),
  addItem: (productId: number, quantity: number) =>
    request.post(`basket?productId=${productId}&quantity=${quantity}`, {}),
  removeItem: (productId: number, quantity: number) =>
    request.delete(`basket?productId=${productId}&quantity=${quantity}`),
};

const agent = {
  Catalog,
  Basket,
};

const TestErrors = {
  get400Error: () => request.get("Buggy/bad-request"),
  get401Error: () => request.get("Buggy/unauthorized"),
  get404Error: () => request.get("Buggy/not-found"),
  get500Error: () => request.get("Buggy/sever-error"),
  getValidationError: () => request.get("Buggy/validation-error"),
};

export default agent;
