//Definindo variáveis Necessárias
let nomeHeroi = "AlanesdaGFT"
let quantidadeXP = 10002


//Inicio do jogo
//Validação do jogo pela idade utilizando perador And.
let idade = 26
let idadeVerificada = true
let resultado = ((idade >= 18 && idadeVerificada === true))
console.log("Bem vindo(a) ao jogo! Para começar, Digite sua idade para fazer a verificação e prosseguir para o cadastro.  carregando...  ")
console.log("verificação concluída! você tem " + idade + " anos." + " Cadastro feito com sucesso! Vamos Jogar!!")


// Os detalhes...

console.log ("Quantidade de XP for menor que 1000, o HERÓI é NÍVEL FERRO!")
console.log ("Quantidade de XP for entre 2001 e 5000, o HERÓI é NÍVEL BRONZE!")
console.log ("Quantidade de XP for entre 5001 e 7000, o HERÓI é NÍVEL PRATA!")
console.log ("Quantidade de XP for entre 7001 e 8000, o HERÓI é NÍVEL OURO!")
console.log ("Quantidade de XP for entre 8001 e 9000, o HERÓI é NÍVEL ASCENDENTE!")
console.log ("Quantidade de XP for entre 9001 e 10000, o HERÓI é NÍVEL IMORTAL!")
console.log ("Quantidade de XP for maior que 10001, o HERÓI é NÍVEL RADIANTE!")


//sobre o XP e subida de nível 
//utilizando estrutura de decisão ELSE IF. 

let nivelHeroi
if (quantidadeXP < 1000){
    nivelHeroi = " HERÓI FERRO!"
} else if (quantidadeXP >=1001 && quantidadeXP <= 2000 ){
    nivelHeroi = " HERÓI BRONZE!"
} else if (quantidadeXP >=2001 && quantidadeXP <= 5000 ){
    nivelHeroi = " HERÓI PRATA!"
} else if (quantidadeXP >=5001 && quantidadeXP <= 7000 ){
    nivelHeroi = " HERÓI OURO!"
} else if (quantidadeXP >=7001 && quantidadeXP <= 8000 ){
    nivelHeroi = " HERÓI PLATINA!"
} else if (quantidadeXP >=8001 && quantidadeXP <= 9000 ){
    nivelHeroi = " HERÓI ASCENDENTE!"
} else if (quantidadeXP >=9001 && quantidadeXP <= 10000 ){
    nivelHeroi = "HERÓI IMORTAL!"
} else {
    nivelHeroi = " HERÓI RADIANTE!"
}

console.log("O Herói de nome : " + nomeHeroi + ", está no nível: " + nivelHeroi + ".")


    // Bonificação do Jogo e introduzindo estrutura de decisão;
    // o Herói pode ganhar bonificação de acordo com o que come.
    //Introduzindo laços de repetição;

    let comida = "lasanha"
    if (comida === "pedra") {
        console.log("Você perdeu 100 XP")
    } else if (comida === "lasanha") {
        console.log("Parabéns! Você ganhou um bônus de 1000 XP!")

    }



