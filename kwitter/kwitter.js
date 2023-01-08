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

function sha512(str) {
    return crypto.subtle.digest("SHA-512", new TextEncoder("utf-8").encode(str)).then(buf => {
        return Array.prototype.map.call(new Uint8Array(buf), x=>(('00'+x.toString(16)).slice(-2))).join('');
    });
}
function logUserIn() {
    user_name = document.getElementById("user_name").value;
    user_pass = document.getElementById("user_pass").value;
    if(user_name != "") {
        // localStorage.setItem("user_name", user_name);
        // localStorage.setItem("user_pass", user_pass);
        // window.location = "kwitter_room.html";
        if(user_pass != "") {
            // passhash = firebase.database().get(user_name);
            userFound = false;
            firebase.database().ref("/Users/").on('value', (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                      childKey = childSnapshot.key;
                      childValue = childSnapshot.val();
                      if(user_name == childKey) {
                        userFound = true;
                        passwordSHA512 = sha512(user_pass);
                        console.log(passwordSHA512);
                        if(passwordSHA512 == childValue) {
                            localStorage.setItem("user_name", user_name);
                            localStorage.setItem("user_pass", user_pass);
                            window.location = "kwitter_room.html";
                        } else {
                            document.getElementById("user_pass").value = "";
                            document.getElementById("user_pass").placeholder = "Incorrect password for user!";
                        }
                      }
                });
          });
          if(!userFound) {
            document.getElementById("user_pass").value = "";
            document.getElementById("user_name").value = "";
            document.getElementById("user_name").placeholder = "Username not found!";
          }
            // console.log(passhash);
        }else {
            document.getElementById("user_pass").value = "";
            document.getElementById("user_pass").placeholder = "You cant join with a empty password!";
        }
    }else {
        document.getElementById("user_name").value = "";
        document.getElementById("user_name").placeholder = "You cant join with a empty username!";
    }
}

function registerUserIn() {
}