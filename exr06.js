let num = 12;
fatorial = 1;
for (let i = 1; i <= num; i++ ){
    fatorial *= i;
}
let formateFatorial = fatorial.toLocaleString();
console.log(`O fatorial de ${num} é ${formateFatorial}`);