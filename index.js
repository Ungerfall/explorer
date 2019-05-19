window.addEventListener("load", function(e) {
    var login = document.getElementById("login");
    var password = document.getElementById("password");

    var sighUpBtn = document.getElementById("btn-signup");
    sighUpBtn.addEventListener("click",function(e){
        registerUserWithEmailAndPassword(login.value, password.value);
    },false);

    var authBtn = document.getElementById("btn-auth");
    authBtn.addEventListener("click",function(e){
        authBtn.disabled = "true";
    },false);

    var mapBtn = document.getElementById("btn-map");
    mapBtn.addEventListener("click", function(e){
        window.location.href = "map.html";
    })
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