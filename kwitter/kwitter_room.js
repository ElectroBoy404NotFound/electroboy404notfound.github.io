var firebaseConfig = {
  apiKey: "AIzaSyAgzTTGqVTmmPJCyYe2W7c8pgvwCaXuIg8",
  authDomain: "kwitter-2a961.firebaseapp.com",
  databaseURL: "https://kwitter-2a961-default-rtdb.firebaseio.com",
  projectId: "kwitter-2a961",
  storageBucket: "kwitter-2a961.appspot.com",
  messagingSenderId: "79153385170",
  appId: "1:79153385170:web:16021a99014436c314270b"
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
