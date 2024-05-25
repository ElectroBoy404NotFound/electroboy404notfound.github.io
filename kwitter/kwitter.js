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

async function sha512(str) {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder("utf-8").encode(str));
    return Array.prototype.map.call(new Uint8Array(buf), x=>(('00'+x.toString(16)).slice(-2))).join('');
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
                snapshot.forEach(async (childSnapshot) => {
                      childKey = childSnapshot.key;
                      childValue = childSnapshot.val();
                      if(user_name == childKey) {
                        userFound = true;
                        passwordSHA512 = await sha512(user_pass);
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
            document.getElementById("user_name").placeholder = "Incorrect Username or password!";
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

async function registerUserIn() {
    userFound = false;
    firebase.database().ref("/Users/").on('value', (snapshot) => {
        snapshot.forEach(async (childSnapshot) => {
            if(document.getElementById("user_name").value == childSnapshot.key)
                userFound = true;
        });
    });
    if(userFound) { 
        document.getElementById("user_pass").value = "";
        document.getElementById("user_pass").placeholder = "User already exists!";
        document.getElementById("user_name").value = "";
        document.getElementById("user_name").placeholder = "User already exists!";
    }else {
        username = document.getElementById("user_name").value;
        password = document.getElementById("user_pass").value;
        if(username == "") {
            document.getElementById("user_name").value = "";
            document.getElementById("user_name").placeholder = "You cant join with a empty username!";
        } else {
            if(password == "") {
                document.getElementById("user_pass").value = "";
                document.getElementById("user_pass").placeholder = "You cant join with a empty password!";
            } else {
                await firebase.database().ref('Users/' + username).set(await sha512(password));
                localStorage.setItem("user_name", username);
                localStorage.setItem("user_pass", password);
                window.location = "kwitter_room.html";
            }
        }
    }
}
