const userInput = document.getElementById("userString");

function ConvertToDirectLink() {
    console.log(userInput.value.replace(/dropbox/g, "dl.dropboxusercontent"));
}