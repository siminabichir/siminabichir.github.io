var activePage = "home";

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function showPage(id) {
  hide(activePage);
  var page = (document.getElementById(id).style.display = "block");
  activePage = id;
}

showPage("home");
