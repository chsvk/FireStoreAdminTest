 var config = {
    apiKey: "AIzaSyAct0ROsbl6__cuq1hrvyunQg8pGXrQz-s",
    authDomain: "superadmin-bc13c.firebaseapp.com",
    databaseURL: "https://superadmin-bc13c.firebaseio.com",
    projectId: "superadmin-bc13c",
    storageBucket: "superadmin-bc13c.appspot.com",
    messagingSenderId: "948822799307"
  };
  firebase.initializeApp(config);


function LogOut() {
    firebase.auth().signOut().then(function() {
        location.href = "../index.html"
         var x = document.getElementById("snackbar");
         x.textContent = "Logged Out";
         x.className = "show";
         setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

  // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
        var x = document.getElementById("snackbar");
         x.textContent = "Error! Please Try Again!";
         x.className = "show";
         setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    });
}

