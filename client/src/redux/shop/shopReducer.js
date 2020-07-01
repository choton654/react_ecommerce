import { shopTypes } from './shopTypes';

const initState = {
  collections: null,
  loading: false,
  error: null,
};

export const shopReducer = (state = initState, action) => {
  switch (action.type) {
    case shopTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        loading: true,
      };
    case shopTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        collections: action.payload,
      };
    case shopTypes.FETCH_COLLECTIONS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
