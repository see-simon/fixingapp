// import firebase from "firebase/app";
// import "firebase/storage";
// import "firebase/firestore";
// import 'firebase/firebase';
// const firebaseConfig = {
   
//   };
//   // Initialize Firebase
// //   firebase.initializeApp(Config);
//   // firebase.analytics();

// // const storage = firebase.storage();
// // const db = firebase.firestore();

// // export  { storage,db , firebase as default};
// let app;
// if (!firebase.apps.length){
//     app = firebase.initializeApp(firebaseConfig)
// }
// else{
//     firebase.app
// }
// const auth = firebase .auth()
// const db = firebase.firestore();

// export {auth, db};    // remove if is not working to let the previous parts to work again


// import firebase from "firebase"
import  firebase from './firebase'
import "firebase/auth"
import "firebase/database"
import 'firebase/firestore'


const app = firebase.initializeApp({
  apiKey: "AIzaSyBUPSgw5FVcqegYiVJEyvZnUBbPD5o5L9c",
  authDomain: "codetripe1.firebaseapp.com",
  projectId: "codetripe1",
  storageBucket: "codetripe1.appspot.com",
  messagingSenderId: "930880363923",
  appId: "1:930880363923:web:165cda42e547d58bae5c66",
  measurementId: "G-6RN73BPSX4"

  
})

export const auth = app.auth()
export const db = app.firestore()
export const _db = app.database()
export default app