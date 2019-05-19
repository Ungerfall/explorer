window.addEventListener("load", function(e) {
    var login = document.getElementById("login");
    var password = document.getElementById("password");

    var sighUpBtn = document.getElementById("btn-signup");
    sighUpBtn.addEventListener("click",function(e){
        registerUserWithEmailAndPassword(login.value, password.value);
    },false);

    var authBtn = document.getElementById("btn-auth");
    authBtn.addEventListener("click",function(e){
        loginUserWithEmailAndPassword(login.value, password.value);
    },false);

    var guestBtn = document.getElementById("btn-guest");
    guestBtn.addEventListener("click", function(e) {
        loginAnonymously();
    });
}, false);

function registerUserWithEmailAndPassword(email, pass) {
    firebase.auth()
        .createUserWithEmailAndPassword(email, pass)
        .then((user) => {
            console.log(user);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode+errorMessage);
        });
}

function loginUserWithEmailAndPassword(email, pass) {
    firebase.auth().signInWithEmailAndPassword(email, pass)
    .then(function() {
        goToMap();
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error);
      });
}

function loginAnonymously() {
    firebase.auth().signInAnonymously()
    .then(user => {
        goToMap();
    })
    .catch(error => {
        console.log(error);
    });
}

function goToMap() {
    window.location.href = "map.html";
}