import { userTypes } from './userTypes';

export const userAction = (user) => ({
  type: userTypes.SET_CURRENT_USER,
  payload: user,
});
