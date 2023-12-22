let product_focus = false;
let children_focus = false;
let mouse_out = true;

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

// Navigation Clavier
/*
for (let product of document.getElementsByClassName("product")) {
  mouse_out = true;
  product.addEventListener("mouseover", () => {
    mouse_out = false;
  });
  if (mouse_out) {
    product.addEventListener("focus", () => {
      displayBuy();
    });
    product.children[0].children[1].addEventListener("focus", () => {
      displayBuy();
    });
  }
}
function displayBuy() {
  this.children[0].children[1].style.display = "block";
}
function hideBuy() {
  this.children[0].children[1].style.display = "none";
}
*/
