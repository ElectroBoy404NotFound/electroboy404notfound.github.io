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

var room_name = localStorage.getItem("room");
var username = localStorage.getItem("user_name");

function getData() { 
      firebase.database().ref("/rooms/"+room_name).on('value', function(snapshot) { 
            document.getElementById("output").innerHTML = ""; 
            snapshot.forEach(function(childSnapshot) { 
                  childKey  = childSnapshot.key; 
                  childData = childSnapshot.val(); 
                  var name = childData.name;
                  message = childData.message;
                  likes = childData.likes;

                  document.getElementById("output").innerHTML += "<h4>" + name + "<img src=\"tick.png\" class=\"user_tick\"></h4> <h4 class=\"msg-h4\">" + message + "</h4><button class=\"btn btn-warning\" id=\"" + childKey +"\" value=\"" + likes + "\" onclick=\"addLike(this.id)\"> <span class=\"gylphicon gylphicon-thunbs-up\"> likes: " + likes + "</span></button>";
            });  
      }); 
}
getData();

function send() {
      if(document.getElementById("msg").value != "") {
            firebase.database().ref("/rooms/" + room_name).push({
                  name: username,
                  message: document.getElementById("msg").value,
                  likes: 0
            });
            document.getElementById("msg").value="";
            document.getElementById("msg").placeholder="Message";
      }else {
            document.getElementById("msg").placeholder="You cant send a empty message!";
      }
}

function addLike(childKey) {
      console.log(document.getElementById(childKey).value);
      firebase.database().ref(room_name).child(childKey).update({
            likes: Number(document.getElementById(childKey).value) + 1
      });
} 

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room");
      location = "index.html";
}

function back() {
      localStorage.removeItem("room");
      location = "kwitter_room.html";
}
