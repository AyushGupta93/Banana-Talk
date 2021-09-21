// var userdata = prompt('What is your name?');
// var welcomeUser= 'welcome ' + userdata;
// alert(welcomeUser);

var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");

function clickEventHandler() {
    console.log("clicked");
    console.log("input", textInput.value);
};

btnTranslate.addEventListener("click", clickEventHandler);
