import { auth, createUserProfileDocument } from '../../firebase/firebase';
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
