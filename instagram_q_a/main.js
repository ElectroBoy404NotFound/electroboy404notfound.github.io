// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCefyVN2W6RPYxLRMCksojOwi1yOOtinYM",
  authDomain: "twitterqa-4f38e.firebaseapp.com",
  databaseURL: "https://twitterqa-4f38e-default-rtdb.firebaseio.com",
  projectId: "twitterqa-4f38e",
  storageBucket: "twitterqa-4f38e.appspot.com",
  messagingSenderId: "1097202260145",
  appId: "1:1097202260145:web:085b74a1f7ca277914aa90"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var times_sent = localStorage.getItem("times_sent");
var first_send = localStorage.getItem("first_send");

function send_message() {
  var text = document.getElementById("answer").value;
  var now = new Date().getTime();

  if(first_send == null) localStorage.setItem("first_send", now);

  times_sent++;
  firebase.database().ref("/answers/").child(now).update({
    answer: text,
    time: now,
    no_answer: times_sent,
    firstsend: first_send
  });

  localStorage.setItem("times_sent", times_sent);
  setTimeout(() => {console.log("Timeout, redirecting"); window.location = "success.html";}, 1500);

  alert("Submitting... Please wait, click Ok to continue and wait 2 seconds");
}

function textbox_entered_func() {
  var text = document.getElementById("answer").value;
  console.log(text);
  if(text == "") {
    document.getElementById("hidb").innerHTML = "";
    return;
  }

  document.getElementById("hidb").innerHTML = "<button id=\"butt\" onclick=\"send_message()\">Send Question!</button><br><br>";
}

var countDownDate = new Date("Jul 25, 2024 23:59:59").getTime();

var i = 0;
var txt = 'Ask me a question:- ';
var speed = 100;
function typeWriter() {
  if (i < txt.length) {
      document.getElementById("heading_text1").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
  } else {
    document.getElementById("thefirstspan").innerHTML += "<h4 class=\"w3-animate-bottom\" id=\"question_head\">Your question: </h4>" +
                "<input type=\"text\" hint=\"Your question!\" id=\"answer\" onchange=\"textbox_entered_func()\" class=\"w3-animate-bottom\"><br><br>"

    document.getElementById("hidden_stuff").innerHTML += "<hr><br>" +
                "<span>" + 
                  "<h2 id=\"time_left\">Time left: </h2>" + 
                  "<h2 id=\"timer\"></h2>" + 
                "</span><br><span id=\"hidb\"></span>";
  }
}
typeWriter();

// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = days + "Days " + hours + "Hours "
  + minutes + "Minutes " + seconds + "Seconds    ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Time's up!";

  }
}, 1000);

// var waiting = true;
// function delay_ms(t) {
//   setTimeout(() => {
//     console.log("Doin' Nothin'");
//     waiting = false;
//   }, t);
//   do {
//     console.log("I AM WAITINGGGG");
//   } while(waiting);
//   waiting = true;
// }

function sleep(num) {
  let now = new Date();
  let stop = now.getTime() + num;
  while(true) {
      now = new Date();
      if(now.getTime() > stop) return;
  }
}
