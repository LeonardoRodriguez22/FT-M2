import { ADD_PRODUCT, DELETE_PRODUCT, GET_STORE_NAME } from "./types";

export function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
}

export function deleteProduct(id) {
  return {
    type: DELETE_PRODUCT,
    payload: product,
  };
}

export function getStoreName() {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/store")
      .then((response) => response.data.name)
      .then((response) =>
        dispatch({
          type: GET_STORE_NAME,
          payload: response,
        })
      );
  };
}
