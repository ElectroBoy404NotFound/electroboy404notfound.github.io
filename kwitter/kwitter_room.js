const firebaseConfig = {

    apiKey: "AIzaSyDL3WFvgdGJeYNs328L7PDRVrr42zwr6L8",

    authDomain: "kwitter-665da.firebaseapp.com",

    databaseURL: "https://kwitter-665da-default-rtdb.firebaseio.com",

    projectId: "kwitter-665da",

    storageBucket: "kwitter-665da.appspot.com",

    messagingSenderId: "382606967465",

    appId: "1:382606967465:web:f82000ffe701f58738dfb8"

  };

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome to kwitter, " + user_name + "!";

function getData() {
      firebase.database().ref("/rooms/").on('value', (snapshot) => {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach((childSnapshot) => {
                  childKey  = childSnapshot.key;
                  Room_names = childKey;
                  document.getElementById("output").innerHTML += 
                  "<div class='room_name' id=" + Room_names + " onclick='goToRoom(this.id)'>#" + Room_names + "</div>"
            });
      });
}
getData();

function addRoom() {
      var roomName = document.getElementById("room_name").value;
      if(roomName != "") {
            firebase.database().ref("/rooms/").child(roomName).update({});
            goToRoom(roomName);
      }else {
            document.getElementById("room_name").value = "";
            document.getElementById("room_name").placeholder = "You cant make a room with no name!";
      }
}

function goToRoom(room) {
      localStorage.setItem("room", room);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("user_pass");
      localStorage.removeItem("room");
      location = "index.html";
}
