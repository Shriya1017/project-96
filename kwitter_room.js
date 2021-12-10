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
    
  
  room_name=localStorage.getItem('room_name')
  user_name=localStorage.getItem('user_name')
  

user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
function add_room(){
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(user_name).update({purpose:"addingUser"});
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name"+room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code

      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";

}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";

}