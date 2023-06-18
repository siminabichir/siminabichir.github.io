var employed = false;
var age = 24;
var name = "Daniel Muresan";
age = 30;
var skills = ["HTML", "CSS", "JS"];
var person = {
  employed: true,
  age: 29,
};
var msg = document.getElementById("message");
name = "Daniela Muresan";
function printInfo() {
  console.info("My name is", name);
  console.warn(typeof person, person);
  console.log(typeof skills, skills, age);
}
printInfo();
