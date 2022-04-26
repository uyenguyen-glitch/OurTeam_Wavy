function getEle(id) {
  return document.getElementById(id);
}

function domClassName(number, display) {
  for (var i = 0; i < number; i++) {
    document.getElementsByClassName("fa")[i].style.display = display;
  }
}
function openNav() {
  getEle("mySidenav").style.width = "70%";
  getEle("btnOpen").style.display = "none";
  getEle("btnClose").style.display = "block";
  getEle("logo-responsive").style.display = "block";
  getEle("logo-web").style.display = "none";

  domClassName(6, "inline-block");
  document.getElementById("main").style.marginLeft = "35%";
}

function closeNav() {
  getEle("mySidenav").style.width = "0";
  getEle("btnOpen").style.display = "inline-block";
  getEle("btnClose").style.display = "none";
  getEle("logo-responsive").style.display = "none";
  getEle("logo-web").style.display = "inline-block";

  domClassName(6, "none");
  document.getElementById("main").style.marginLeft = "0";
}
