import { convertCollectionSnapshotToMap, db } from '../../firebase/firebase';
import { shopTypes } from './shopTypes';

export const fetchCollections = () => (dispatch) => {
  dispatch({ type: shopTypes.FETCH_COLLECTIONS_START });

  const collectionRef = db.collection('collections');

  collectionRef
    .get()
    .then((snapshot) => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      dispatch({
        type: shopTypes.FETCH_COLLECTIONS_SUCCESS,
        payload: collectionsMap,
      });
    })
    .catch((error) =>
      dispatch({
        type: shopTypes.FETCH_COLLECTIONS_FAIL,
        payload: error.message,
      }),
    );
};
