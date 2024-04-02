function ehPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++)
        if (numero % i === 0) return false;
    return true;
}

const numeros = [23, 16, 11, 8, 19, 14, 5, 21];
const primos = numeros.filter(numero => ehPrimo(numero));

console.log("Números primos na lista:", primos);
