let username = "fgx";
let password = "v";

const MIN_PASS_LENGTH=8;

function checkFields() {
    if (username ==="") {
        return "il campo username è richiesto";
    }
    if (password ==="") {
        return "il campo password è richiesto";
    }
    if (password.length < MIN_PASS_LENGTH) {
        return `il campo password deve essere di almeno ${MIN_PASS_LENGTH} caratteri`;
    }
    return "ok";
}

console.log(checkFields());

// ESERICIZI SU VARIABILI
