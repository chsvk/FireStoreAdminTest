 var config = {
    apiKey: "AIzaSyAct0ROsbl6__cuq1hrvyunQg8pGXrQz-s",
    authDomain: "superadmin-bc13c.firebaseapp.com",
    databaseURL: "https://superadmin-bc13c.firebaseio.com",
    projectId: "superadmin-bc13c",
    storageBucket: "superadmin-bc13c.appspot.com",
    messagingSenderId: "948822799307"
  };
  firebase.initializeApp(config);


function Login () {
        var x = document.getElementById("snackbar")
        var reg = new RegExp("^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(cyrrup)\.com$");
        var email = document.getElementById('EmailID').value;
        var pass = document.getElementById('Password').value;
        if((reg.test(email)) & (pass.length>7)){
               firebase.auth().signInWithEmailAndPassword(email, pass).then(function () {
                   var user = firebase.auth().currentUser;
                   if(user){
                        x.textContent = "Logged In";
                        x.className = "show";
                        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
                       location.href = "../Html/DashBoard.html"
                   }else{
                        x.textContent = "User Doesnt Exist";
                        x.className = "show";
                        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
                   }

               }).catch(function(error) {
              // Handle Errors here.

              var errorCode = error.code;
              var errorMessage = error.message;
                   x.textContent = "User Doesnt Exist, Please Register to Continue";
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

              // ...
            });
            }
        else {
        x.textContent = "Authentication Restricted or Invalid Credentials";
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        }
      }

function SignUpPageRedirectButton () { location.href="RegisterPage.html" }

