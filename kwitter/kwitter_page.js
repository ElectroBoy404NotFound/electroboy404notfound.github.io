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

var room_name = localStorage.getItem("room");
var username = localStorage.getItem("user_name");
var lastmsgHASH = "";
async function sha512(str) {
      const buf = await crypto.subtle.digest("SHA-256", new TextEncoder("utf-8").encode(str));
      return Array.prototype.map.call(new Uint8Array(buf), x=>(('00'+x.toString(16)).slice(-2))).join('');
    }
function getData() { 
      firebase.database().ref("/rooms/"+room_name).on('value', function(snapshot) { 
            document.getElementById("output").innerHTML = ""; 
            snapshot.forEach(function(childSnapshot) { 
                  childKey  = childSnapshot.key; 
                  childData = childSnapshot.val(); 
                  var name = childData.name;
                  message = childData.message;
                  likes = childData.likes;
                  lastMsgHash = childData.lastMsgHash;
                  if(lastMsgHash != lastmsgHASH) {
                        console.log(lastMsgHash);
                        console.log(lastmsgHASH);
                        // location = "kwitter_room.html"
                  }
                  hash = childData.msghash;
                  lastmsgHASH = hash;
                  document.getElementById("output").innerHTML += "<h4>" + name + "<img src=\"tick.png\" class=\"user_tick\"></h4> <h4 class=\"msg-h4\">" + message + "</h4><button class=\"btn btn-warning\" id=\"" + childKey +"\" value=\"" + likes + "\" onclick=\"addLike(this.id)\"> <span class=\"gylphicon gylphicon-thunbs-up\"> likes: " + likes + "</span></button>";
            });  
      }); 
}
getData();

async function send() {
      if(document.getElementById("msg").value != "") {
            firebase.database().ref("/rooms/" + room_name).push({
                  name: username,
                  message: document.getElementById("msg").value,
                  likes: 0,
                  lastMsgHash: lastmsgHASH,
                  msghash: lastmsgHASH = await sha512(username + document.getElementById("msg").value + 0 + lastmsgHASH)
            });
            document.getElementById("msg").value="";
            document.getElementById("msg").placeholder="Message";
      }else {
            document.getElementById("msg").placeholder="You cant send a empty message!";
      }
}

async function addLike(childKey) {
      console.log(document.getElementById(childKey).value);
      firebase.database().ref("/rooms/" + room_name).child(childKey).update({
            likes: Number(document.getElementById(childKey).value) + 1
      });
} 

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("user_pass");
      localStorage.removeItem("room");
      location = "index.html";
}

function back() {
      localStorage.removeItem("room");
      location = "kwitter_room.html";
}
