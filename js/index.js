const userInput = document.getElementById("userString");
const directLink = document.getElementById("directLink");

function ConvertToDirectLink() {
    if (userInput.value !== "") {
        if (userInput.value.includes("dropbox")) {
            directLink.textContent = userInput.value.replace(/dropbox/g, "dl.dropboxusercontent")
            directLink.href = directLink.textContent;
        }
    }
}

function CopyToClipboard() {
    if (userInput.value !== "") {
        if (userInput.value.includes("dropbox")) {
            const copyText = document.getElementById("directLink").textContent;
            navigator.clipboard.writeText(copyText).then(() => {
                alert("Copied to clipboard!");
            });
        }
    }
}
