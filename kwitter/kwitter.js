function logUserIn() {
    user_name = document.getElementById("user_name").value;
    if(user_name != "") {
        localStorage.setItem("user_name", user_name);
        window.location = "kwitter_room.html";
    }else {
        document.getElementById("user_name").value = "";
        document.getElementById("user_name").placeholder = "You cant join with a empty username!";
    }
}