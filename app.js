var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#translate-input");
var outputDiv = document.querySelector("#translate-output");

// var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslatedURL(input) {
    return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
    console.log("error occured", error)
    alert("some error occured! Try again after some time");
}

function clickEventHandler() {
    var inputText = textInput.value; // taking input 

    // calling server for processing
    fetch(getTranslatedURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; // output
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickEventHandler);
