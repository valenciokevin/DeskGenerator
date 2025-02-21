function updateText() {
    let text = document.getElementById("inputText").value

    document.getElementById("upperTextOutput").value = text.toUpperCase();
    document.getElementById("lowerCaseOutput").value = text.toLowerCase();
    document.getElementById("noSpacesOutput").value = text.replace(/\s/g, "");
    document.getElementById("onlyNumbersOutput").value = text.replace(/\D/g, "");
}

function clearInput(id) {
    document.getElementById(id).value = "";
}

function whatsNumber() {
    let phoneNumber = document.getElementById("onlyNumbersOutput").value;
    let wppLink = "https://wa.me/55" + phoneNumber;

    window.open(wppLink, "_blank");
}

function copyText(id) {
    let text = document.getElementById(id);
    navigator.clipboard.writeText(text.value);
}