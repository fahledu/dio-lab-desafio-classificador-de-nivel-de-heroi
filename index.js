const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function heroNameReqeust() {
    reader.question('Qual é o nome do seu herói? (Pressione Enter para continuar, ou digite "1" para sair) ', (heroName) => {
        if (heroName === '1') {
            reader.close();
            return;
        }

        if (!heroName.trim()) {
            console.log("Por favor, insira um nome válido.");
            heroNameReqeust();
            return;
        }

        const heroXP = Math.floor(Math.random() * 20001);
        const heroLvl = setLvl(heroXP);

        console.log(`O Herói de nome ${heroName} está no nível de ${heroLvl}`);
        heroNameReqeust(); 
    });
}

function setLvl(heroXP) {
    switch (true) {
        case heroXP > 1000 && heroXP <= 2000:
            return 'Bronze';
        case heroXP > 2000 && heroXP <= 5000:
            return 'Prata';
        case heroXP > 5000 && heroXP <= 7000:
            return 'Ouro';
        case heroXP > 7000 && heroXP <= 8000:
            return 'Platina';
        case heroXP > 8000 && heroXP <= 9000:
            return 'Ascendente';
        case heroXP > 9000 && heroXP <= 10000:
            return 'Imortal';
        case heroXP > 10000:
            return 'Radiante';
        default:
            return 'Ferro';
    }
}

heroNameReqeust();