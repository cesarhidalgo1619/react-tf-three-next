import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB8vI2e9AVIK-r1xnH4mNtvScqYS9W2kHg',
  authDomain: 'handsup-ab4ee.firebaseapp.com',
  databaseURL: 'https://handsup-ab4ee-default-rtdb.firebaseio.com',
  projectId: 'handsup-ab4ee',
  storageBucket: 'handsup-ab4ee.appspot.com',
  messagingSenderId: '336043990822',
  appId: '1:336043990822:web:20a9dc0ec62685bcff2be7',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const database = firebase.firestore();


export const changeAvatar =(text)=>{
  var user=firebase.auth().currentUser
  if (user){
    database.collection("users").doc(user.uid).update({
    "avatar": text
});  
  console.log("Avatar actualizado correcatemente")
  }else{
    console.log("Fallo al Actualizar el Avatar")
  }

}

// export const GetAvatar =()=>{
//   var user=firebase.auth().currentUser
//   const avatar=null
//   if (user){
//     var docRef = database.collection("users").doc(user.uid);
//     docRef.get().then(function(doc) {
//       if (doc.exists) {
//           avatar=doc.data().avatar;
//       } else {
//           // doc.data() will be undefined in this case
//           console.log("No such document!");
//       }
//   }).catch(function(error) {
//       console.log("Error getting document:", error);
//   });
//   }else{
//     console.log("Fallo al Obtener")
//   }
// }



const mapUserFromFirebaseAuthtouser = user => {
  const { displayName, email, photoURL } = user;

  return {
    avatar: photoURL,
    username: displayName,
    email,
  };
};

export const onAuthStateChange = (onChange) => {
  return firebase
  .auth()
  .onAuthStateChanged(user => {
      const normalizedUser= user ?
      mapUserFromFirebaseAuthtouser(user): null
      onChange(normalizedUser)
  });
};

// export const LoginGoogle = () => {
//   const googleprovider = new firebase.auth.GoogleAuthProvider();
//   return firebase.auth().signInWithPopup(googleprovider).then(mapUserFromFirebaseAuthtouser);
// };


export const LoginGoogle = () => {
  console.log("clicked");
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
  var token = result.credential.accessToken;
  var user = result.user;
  database.collection("users").doc(user.uid).get().then(doc => {
  if (doc.exists) {
  console.log("already hee");
  } else {
  database.collection("users").doc(user.uid).set({
  name: user.displayName,
  user_id: user.uid,
  avatar:""
  }).then(function() {
  console.log("Document successfully written!");
  }).catch(function(error) {
  console.error("Error writing document: ", error);
  });
  }
  });
  })
  .catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  var email = error.email;
  var credential = error.credential;
  });
  }


export const LogOut=()=>{
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}