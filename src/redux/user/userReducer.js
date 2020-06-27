import { userTypes } from './userTypes';

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.SIGN_IN_WITH_EMAIL_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case userTypes.SIGN_IN_WITH_EMAIL_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
        loading: false,
      };
    case userTypes.SIGN_IN_WITH_EMAIL_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
