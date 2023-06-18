function hideAllPages() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("languages").style.display = "none";
  document.getElementById("projects").style.display = "none";
}

function showHome() {
  hideAllPages();
  var page = (document.getElementById("home").style.display = "block");
}
//showHome();

function showSkills() {
  hideAllPages();
  var page = (document.getElementById("skills").style.display = "block");
}

function showLanguages() {
  hideAllPages();
  var page = (document.getElementById("languages").style.display = "block");
}

function showProjects() {
  hideAllPages();
  var page = (document.getElementById("projects").style.display = "block");
}
