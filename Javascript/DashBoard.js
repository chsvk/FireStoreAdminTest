 var config = {
    apiKey: "AIzaSyAct0ROsbl6__cuq1hrvyunQg8pGXrQz-s",
    authDomain: "superadmin-bc13c.firebaseapp.com",
    databaseURL: "https://superadmin-bc13c.firebaseio.com",
    projectId: "superadmin-bc13c",
    storageBucket: "superadmin-bc13c.appspot.com",
    messagingSenderId: "948822799307"
  };
  firebase.initializeApp(config);
    var firestore = firebase.firestore();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
      location.href="../Html/LoginPage.html"
    // No user is signed in.
  }
});

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

function UploadToFireStore() {
    var schoolName = document.getElementById('name').value;
    var Adress = document.getElementById('adress').value;
    var SchoolRef = firestore.collection("Schools").doc(schoolName);
    SchoolRef.set({
        Name: schoolName,
        Address: Adress
    }).then(function(){
        var x = document.getElementById("snackbar");
         x.textContent = "Data Uploaded To FireStore";
         x.className = "show";
         setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

    }).catch(function(error){
        var x = document.getElementById("snackbar");
         x.textContent = error.message;
         x.className = "show";
         setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

    });
}

function DropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function admin(){
    document.getElementById('dropDownButton').textContent = " Admin "
}
function parent(){
    document.getElementById('dropDownButton').textContent = " Parent "
}
function driver(){
    document.getElementById('dropDownButton').textContent = " Driver "
}

function InviteSchoolButton() {
    var mail = document.getElementById('mail').value;
    var id = document.getElementById('id').value;
    if((mail== "")||(id=="")){
        var x = document.getElementById("snackbar");
         x.textContent = "Please Fill In All Details!";
         x.className = "show";
         setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }else{
        if(document.getElementById('dropDownButton').textContent=="Type"){
            var x = document.getElementById("snackbar");
         x.textContent = "Please select a Type!";
         x.className = "show";
         setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        }else {
            var inviteList = firestore.collection("Invites").doc(id);
            inviteList.set({
                Mail: mail,
                School_ID: id,
                Type: document.getElementById('dropDownButton').textContent
            }).then(function(){
                var x = document.getElementById("snackbar");
                 x.textContent = "Invitation Sent!";
                 x.className = "show";
                 setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
            }).catch(function(error){
                var x = document.getElementById("snackbar");
         x.textContent = "Error! Please Try Again!";
         x.className = "show";
         setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
            });
        }
    }
}
