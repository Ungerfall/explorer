window.addEventListener("load", function(e){
    var sighUpBtn = document.getElementById("btn-signup");
    sighUpBtn.addEventListener("click",function(e){
        var input = document.getElementById("signup-input");
        registerUserWithEmailAndPassword(input.value)
    },false);

    var authBtn = document.getElementById("btn-auth");
    authBtn.addEventListener("click",function(e){
        authBtn.disabled = "true";
    },false);
}, false);


function registerUserWithEmailAndPassword(email) {
    return (dispatch) => {
        firebase.auth()
            .createUserWithEmailAndPassword(email)
            .then((user) => {

            })
        
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                dispatch({
                    type: types.userRegisterErr,
                    payload: errorMessage
                });
            });
    }
}