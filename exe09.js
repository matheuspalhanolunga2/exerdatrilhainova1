let pontosDeVida = 100;
const danoPorAtaque = 20;
const numeroDeAtaques = 3;

for (let i = 0; i < numeroDeAtaques; i++) {
    pontosDeVida -= danoPorAtaque;
}

console.log("Pontos de Vida Restantes:", pontosDeVida);
