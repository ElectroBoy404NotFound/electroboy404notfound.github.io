function showtest1() {
  document.getElementById("test1").style.visibility = "visible";
  document.getElementById("t1b").style.visibility = "hidden"
  document.getElementById("t2b").style.visibility = "visible"
}
function showtest2() {
  document.getElementById("test2").style.visibility = "visible";
  document.getElementById("t2b").style.visibility = "hidden"
  document.getElementById("t3b").style.visibility = "visible"
}
function showtest3() {
  document.getElementById("test3").style.visibility = "visible";
  document.getElementById("t3b").style.visibility = "hidden"
  document.getElementById("t4b").style.visibility = "visible"
}
function showtest4() {
  document.getElementById("test4").style.visibility = "visible";
  document.getElementById("t4b").style.visibility = "hidden"
  document.getElementById("resultb").style.visibility = "visible"
}
function showres() {
  document.getElementById("ress").style.visibility = "visible";
  document.getElementById("resultb").style.visibility = "hidden"
  document.getElementById("endb").style.visibility = "visible"
}
function closeall() {
  document.getElementById("t1b").style.visibility = "visible";
  document.getElementById("test1").style.visibility = "hidden";
  document.getElementById("test2").style.visibility = "hidden";
  document.getElementById("test3").style.visibility = "hidden";
  document.getElementById("test4").style.visibility = "hidden";
  document.getElementById("ress").style.visibility = "hidden";
  document.getElementById("resultb").style.visibility = "hidden"
  document.getElementById("endb").style.visibility = "hidden"
}