let user = firebase.auth().currentUser;

let database = firebase.database();
firebase.auth().onAuthStateChanged(function(newUser) {
  user = newUser;
});

function getCurrentUser() {
  let userLoaded = false;
  return new Promise((resolve, reject) => {
     if (userLoaded) {
          resolve(firebase.auth().currentUser);
     }
     const unsubscribe = firebase.auth().onAuthStateChanged(user => {
        userLoaded = true;
        unsubscribe();
        resolve(user);
     }, reject);
  });
}