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


function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
              childKey = childSnapshot.key;
              childData = childSnapshot.val();
              if (childKey != "purpose") {
                  firebase_message_id = childKey;
                  message_data = childData;
                  //Start code
                  console.log(firebase_message_id);
                  console.log(message_data);
                  name = message_data['name'];
                  message = message_data['message'];
                  like = message_data['like'];
                  name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
                  message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                  like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                  span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
  
                  row = name_with_tag + message_with_tag + like_button + span_with_tag;
                  document.getElementById("output").innerHTML += row;
                  //End code
              }
          });
      });
  }
  getData();


//Start code
function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}

//End code

getData();

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}