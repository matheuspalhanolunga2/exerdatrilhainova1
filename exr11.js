function calcularIdade(dataNascimento) {
    const anoNascimento = parseInt(dataNascimento.substring(0, 4));
    const mesNascimento = parseInt(dataNascimento.substring(5, 7));
    const diaNascimento = parseInt(dataNascimento.substring(8, 10));

    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth() + 1;
    const diaAtual = dataAtual.getDate();

    let idade = anoAtual - anoNascimento;

    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }

    return idade;
}

const dataNascimento = "1990-05-15";
const idade = calcularIdade(dataNascimento);
console.log("Idade:", idade);
