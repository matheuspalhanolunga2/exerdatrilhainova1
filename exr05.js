var frase = "What is Lorem Ipsum?";

function contarPalavras(frase) {
    var palavras = frase.split(' ');
    return palavras.length;
}

var numeroPalavras = contarPalavras(frase);
console.log("Número de palavras na frase:", numeroPalavras);

