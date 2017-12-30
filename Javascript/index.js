 var config = {
    apiKey: "AIzaSyAct0ROsbl6__cuq1hrvyunQg8pGXrQz-s",
    authDomain: "superadmin-bc13c.firebaseapp.com",
    databaseURL: "https://superadmin-bc13c.firebaseio.com",
    projectId: "superadmin-bc13c",
    storageBucket: "superadmin-bc13c.appspot.com",
    messagingSenderId: "948822799307"
  };
  firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      location.href="../Html/DashBoard.html"
    // User is signed in.
  } else {
      location.href="../Html/LoginPage.html"
    // No user is signed in.
  }
});
