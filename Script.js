const textArea = document.querySelector(".text_area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
    const textEncriptado = encriptar(textArea.value);
    mensaje.value = textEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"; 
}

function encriptar(stringEncriptar) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringEncriptar = stringEncriptar.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptar.includes(matrizCodigo[i][0])) {
            stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptar;
}


function btnDesencriptar() {
    const textDesencriptado = desencriptar(textArea.value);
    mensaje.value = textDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"; 
}

function desencriptar(stringDesencriptar) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringDesencriptar = stringDesencriptar.toLowerCase(); 
  
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptar.includes(matrizCodigo[i][1])) {
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptar;
}

function copiarTexto() {
    mensaje.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}