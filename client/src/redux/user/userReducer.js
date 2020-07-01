import { userTypes } from './userTypes';

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.SIGN_IN_WITH_EMAIL_REQUEST:
    case userTypes.SIGN_UP_REQUEST:
    case userTypes.SIGN_OUT_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case userTypes.SIGN_IN_WITH_EMAIL_SUCCESS:
    case userTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
        loading: false,
      };
    case userTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };
    case userTypes.SIGN_IN_WITH_EMAIL_FAIL:
    case userTypes.SIGN_UP_FAIL:
    case userTypes.SIGN_OUT_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
