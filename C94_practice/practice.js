var firebaseConfig = {
    apiKey: "AIzaSyDL3WFvgdGJeYNs328L7PDRVrr42zwr6L8",
    authDomain: "kwitter-665da.firebaseapp.com",
    databaseURL: "https://kwitter-665da-default-rtdb.firebaseio.com",
    projectId: "kwitter-665da",
    storageBucket: "kwitter-665da.appspot.com",
    messagingSenderId: "382606967465",
    appId: "1:382606967465:web:65ed34f681d2f2c538dfb8"
};
firebase.initializeApp(firebaseConfig);

function addUser() {
    var username = document.getElementById("username").value;
    firebase.database().ref("/").child("username").update({
        username: username
    });
}