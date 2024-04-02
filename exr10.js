let texto = "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY";
let countLetrasMaiusculas = 0;

for (let i = 0; i < texto.length; i++) {
    if (texto[i] >= 'A' && texto[i] <= 'Z') {
        countLetrasMaiusculas++;
    }
}

console.log("Número de letras maiúsculas:", countLetrasMaiusculas);
