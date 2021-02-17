import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL
} from '../actions/products';

const initialState = {
  products: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST: {
      return {
        ...state,
        products: [],
      };
    }
    case GET_PRODUCTS_SUCCESS: {
      const {products} = action.payload.data;
      return {
        ...state,
        products,
      };
    }
    case GET_PRODUCTS_FAIL: {
      return {
        ...state,
        products: [],
      };
    }
    default: {
      return state;
    }
  }
}