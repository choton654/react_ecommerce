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

export const manualSignin = async (email, password) => {
  await auth.signInWithEmailAndPassword(email, password);
  // console.log(userCred);
};

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = db.collection('users').doc(`${user.uid}`);

  const snapShot = await userRef.get();
  // console.log('snapshot ', snapShot);

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
      // console.log('user ref', userRef);
    } catch (error) {
      console.log('error created user', error.message);
    }
  }
  return userRef;
};

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});
export const signinWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
