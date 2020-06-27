import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyA_Cr9YLtatk4I1fSlKuLtEIoo4z7gTGGk',
  authDomain: 'react-ecommerce-1de09.firebaseapp.com',
  databaseURL: 'https://react-ecommerce-1de09.firebaseio.com',
  projectId: 'react-ecommerce-1de09',
  storageBucket: 'react-ecommerce-1de09.appspot.com',
  messagingSenderId: '908153740269',
  appId: '1:908153740269:web:b61bd340f15502daaaa5e4',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.firestore();

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = db.collection('users').doc(`${user.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    try {
      const { displayName, email } = user;
      const createdAt = new Date();
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error created user', error.message);
    }
  }
  return userRef;
};

export const addCollectionandDoc = async (collectionKey, objectsToAdd) => {
  const collectionRef = db.collection(collectionKey);
  console.log(collectionRef);

  const batch = db.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc(obj.title);
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routename: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});
export const signinWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
