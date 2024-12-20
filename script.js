function encode() {
    const inputText = document.getElementById("inputText").value;
    const shift = parseInt(document.getElementById("shift").value);
    let output = '';

    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];

        if (char.match(/[a-z]/i)) {
            const code = inputText.charCodeAt(i);
            let base = (char === char.toUpperCase()) ? 65 : 97;
            output += String.fromCharCode(((code - base + shift) % 26) + base);
        } else {
            output += char; // Non-alphabetic characters are not changed
        }
    }

    document.getElementById("outputText").value = output;
}

function decode() {
    const inputText = document.getElementById("inputText").value;
    const shift = parseInt(document.getElementById("shift").value);
    let output = '';

    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];

        if (char.match(/[a-z]/i)) {
            const code = inputText.charCodeAt(i);
            let base = (char === char.toUpperCase()) ? 65 : 97;
            output += String.fromCharCode(((code - base - shift + 26) % 26) + base);
        } else {
            output += char; // Non-alphabetic characters are not changed
        }
    }

    document.getElementById("outputText").value = output;
}