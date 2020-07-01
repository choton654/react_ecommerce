import {
  auth,
  createUserProfileDocument,
  getCurrentUser,
} from '../../firebase/firebase';
import { userTypes } from './userTypes';

export const signInWithEmail = ({ email, password }) => async (dispatch) => {
  dispatch({ type: userTypes.SIGN_IN_WITH_EMAIL_REQUEST });

  try {
    const { user } = await auth.signInWithEmailAndPassword(email, password);
    const userRef = await createUserProfileDocument(user);
    const userSnapshot = await userRef.get();
    dispatch({
      type: userTypes.SIGN_IN_WITH_EMAIL_SUCCESS,
      payload: { id: userSnapshot.id, ...userSnapshot.data() },
    });
  } catch (error) {
    dispatch({
      type: userTypes.SIGN_IN_WITH_EMAIL_FAIL,
      payload: error.message,
    });
  }
};

export const signUpUser = ({ email, password, displayName }) => async (
  dispatch,
) => {
  dispatch({ type: userTypes.SIGN_UP_REQUEST });

  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    const userRef = await createUserProfileDocument(user, { displayName });
    const userSnapshot = await userRef.get();
    dispatch({
      type: userTypes.SIGN_UP_SUCCESS,
      payload: { id: userSnapshot.id, ...userSnapshot.data() },
    });
  } catch (error) {
    dispatch({
      type: userTypes.SIGN_UP_FAIL,
      payload: error.message,
    });
  }
};

export const checkUserSession = () => async (dispatch) => {
  dispatch({ type: userTypes.CHECK_USER_SESSION });
  try {
    const userAuth = await getCurrentUser();
    console.log(userAuth);
    if (!userAuth) return;
    const userRef = await createUserProfileDocument(userAuth);
    const userSnapshot = await userRef.get();
    dispatch({
      type: userTypes.SIGN_IN_WITH_EMAIL_SUCCESS,
      payload: { id: userSnapshot.id, ...userSnapshot.data() },
    });
  } catch (error) {
    dispatch({
      type: userTypes.SIGN_IN_WITH_EMAIL_FAIL,
      payload: error.message,
    });
  }
};

export const signOutUser = () => async (dispatch) => {
  dispatch({ type: userTypes.SIGN_OUT_REQUEST });

  try {
    await auth.signOut();
    dispatch({
      type: userTypes.SIGN_OUT_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: userTypes.SIGN_OUT_FAIL,
      payload: error.message,
    });
  }
};
