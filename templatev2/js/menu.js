function myAccFunc() {
  var x = document.getElementById("demoAcc");
  if (x.className.indexOf(" show") == -1) {
    x.className += " show";
  } else {
    x.className = x.className.replace(" show", "");
  }
}

document.getElementById("myBtn").click();

function open_menu() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function close_menu() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}
