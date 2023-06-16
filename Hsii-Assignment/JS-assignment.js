alert("Assalam u Alaikum");
alert("Error! Please enter a valid password");
alert("Welcome to JS Land... \n Happy Coading!");
alert("Welcome to JS Land..");
alert("Happy Coading! \n ");

var myVar = "Hello...I can run JS through my Web browser's Console";
console.log(myVar);

var userName
var myName = ("Hafsa Saeed");
var JS = ("Hello World");
alert(JS);
alert("Hafsa Saeed");
alert("25 years Old");
alert("Certified Full Stuck Developer");
var item = ("PIZZA \nPIZZ \nPIZ \nPI \nP");
alert(item);
var email = "example@example.com";
alert("My email address is: " + email);
var book = "A smarter Way to learn";
alert("I am trying to learn From the Book " + book);
window.onload = function() {
    showContent();
};
function showContent() {
    var content = document.getElementById("contentDiv");
    content.innerHTML = "Yeah! I Can write HTML content through JS.";
}

var line = document.createElement("hr");
line.style.border = "none";
line.style.borderTop = "1px Solid white";
line.style.margin = "10px 0";

var contentElement = document.getElementById("contentDiv");
contentElement.parentNode.insertBefore(line, contentElement.nextSibling);

var age1 = 25;
alert("I am " + age1 + " Years Old");

var visitCount = localStorage.getItem(visitCount);
if (visitCount) {
    visitCount = parseInt(visitCount) + 1;
} 
else {
    visitCount = 1;
}
localStorage.setItem("visitCount", visitCount);
document.getElementById("visitCount").textContent = "You have visited this site" + visitcount + "Times";



