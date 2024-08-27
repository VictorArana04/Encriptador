document.getElementById('encryptBtn').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = encryptText(inputText);
    updateOutputText(encryptedText);
    document.getElementById('copyBtn').style.display = 'block'; // Muestra el botón Copiar
});

document.getElementById('decryptBtn').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const decryptedText = decryptText(inputText);
    updateOutputText(decryptedText);
    document.getElementById('copyBtn').style.display = 'none'; // Oculta el botón Copiar
});

document.getElementById('copyBtn').addEventListener('click', () => {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
});

function encryptText(text) {
    const encryptionMap = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    return text.split('').map(char => encryptionMap[char] || char).join('');
}

function decryptText(text) {
    const decryptionMap = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    return text.split(/(enter|imes|ai|ober|ufat)/).map(part => decryptionMap[part] || part).join('');
}

function updateOutputText(text) {
    const outputTextArea = document.getElementById('outputText');
    if (text) {
        outputTextArea.value = text;
    } else {
        outputTextArea.value = 'No hay ningun texto aquí, porfavor ingrese el texto que desea encriptar';
    }
}
