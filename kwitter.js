function AddUser(){
    user_name= document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";
}
function addUser(){
    username= document.getElementById("username").value;
    
    firebase.database().ref("/").child(username).update({purpose:"addingUser"});
}
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDR69Opjix11-jJDluSJXroWyJiIBd3lyw",
    authDomain: "project-93-8c78e.firebaseapp.com",
    databaseURL: "https://project-93-8c78e-default-rtdb.firebaseio.com",
    projectId: "project-93-8c78e",
    storageBucket: "project-93-8c78e.appspot.com",
    messagingSenderId: "575351201570",
    appId: "1:575351201570:web:b48ccd03a4a66e49794f7b",
    measurementId: "G-BF5EDP74SJ"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  