export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAIL = 'GET_PRODUCTS_FAIL';

export function getProductsRequest() {
  return {
    type: GET_PRODUCTS_REQUEST,
  };
}
