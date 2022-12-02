var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === "") {
        myImage.setAttribute ('src','image/kotik.jpg');
    } else {
        myImage.setAttribute ('src','image/kotik2.jpg');
    }
}
var myButton = document.querySelector ('button');
var myHeading = document.querySelector ('h1');
function setUserName () {
    var MyName = prompt ('чай');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'привет' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'da' + storedName;
}
myButton.onclick = function() {
    setUserName();
}