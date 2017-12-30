 var config = {
    apiKey: "AIzaSyAct0ROsbl6__cuq1hrvyunQg8pGXrQz-s",
    authDomain: "superadmin-bc13c.firebaseapp.com",
    databaseURL: "https://superadmin-bc13c.firebaseio.com",
    projectId: "superadmin-bc13c",
    storageBucket: "superadmin-bc13c.appspot.com",
    messagingSenderId: "948822799307"
  };
  firebase.initializeApp(config);


function LoginPageRedirectButton () { location.href= "LoginPage.html" }


function SignUp () {
    var x = document.getElementById("snackbar");
        var reg = new RegExp("^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(cyrrup)\.com$");
        var email = document.getElementById('Email').value;
        var pass = document.getElementById('Password').value;
        var tPass = document.getElementById('Password2').value;

    if(reg.test(email) & (pass==tPass) & (pass.length > 7)){
        firebase.auth().createUserWithEmailAndPassword(email, pass).then(function () {
             var user = firebase.auth().currentUser;
                   if(user){
                        x.textContent = "Signed Up and Logging IN";
                        x.className = "show";
                        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
                       location.href = "../Html/DashBoard.html"
                   }else{
                        x.textContent = "Please Try again!";
                        x.className = "show";
                        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
                   }

        }).catch(function(error) {
  // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
            x.textContent = errorMessage;
            x.className = "show";
          setTimeout( function () { x.className = x.className.replace("show", "");}, 3000);
          // ...
        });
    }else {
        x.textContent = "Unauthorized or Bad Credentials";
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }


}
