const inputText = document.getElementById("inputText");
const resultText = document.getElementById("resultText");
const encryptBtn = document.getElementById("encryptBtn");
const decryptBtn = document.getElementById("decryptBtn");
const copyBtn = document.getElementById("copyBtn");
const placeholderImage = document.getElementById("placeholderImage");
const placeholderText = document.getElementById("placeholderText");

function encrypt(text) {
    let encryptedText = text.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");
    return encryptedText;
}

function decrypt(text) {
    let decryptedText = text.replace(/enter/g, "e")
                            .replace(/imes/g, "i")
                            .replace(/ai/g, "a")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");
    return decryptedText;
}

function hidePlaceholderContent() {
    placeholderImage.classList.add("hidden");
    placeholderText.classList.add("hidden");
}

function showCopyButton() {
    copyBtn.classList.remove("hidden");
}

encryptBtn.addEventListener("click", () => {
    const text = inputText.value.toLowerCase();
    const encrypted = encrypt(text);
    resultText.textContent = encrypted ? encrypted : "Ningún mensaje fue encontrado";
    hidePlaceholderContent();
    showCopyButton();
});

decryptBtn.addEventListener("click", () => {
    const text = inputText.value.toLowerCase();
    const decrypted = decrypt(text);
    resultText.textContent = decrypted ? decrypted : "Ningún mensaje fue encontrado";
    hidePlaceholderContent();
    showCopyButton();
});

copyBtn.addEventListener("click", () => {
    const text = resultText.textContent;
    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Texto copiado al portapapeles");
        })
        .catch(err => {
            console.error("Error al copiar el texto: ", err);
        });
});
