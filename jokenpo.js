// Permitir
// que eu decida quantas rodadas iremos fazer;
// Ler a
// minha escolha (Pedra, papel ou tesoura);
// Decidir
// de forma aleatória a decisão do computador;
// Mostrar
// quantas rodadas cada jogador ganhou;
// Determinar
// quem foi o grande campeão de acordo com a quantidade de vitórias de cada
// um (computador e jogador);
// Perguntar
// se o Jogador quer jogar novamente, se sim inicie volte a escolha de
// quantidade de rodadas, se não finalize o programa.

// 1 - Pedra 2 - Tesoura 3 - Papel 
//escolha do jogador



console.log("vamos jogar jokenpo?")

var qnt = +prompt("Quantas rodadas quer jogar?: ")

var vbot = 0;
var vplayer = 0;


function reset(){
var vbot = 0;
var vplayer = 0;
}

// tesoura = pedra - perde 
// tesoura = papel - ganha
// pedra = papel - perde
//pedra = tesoura - ganha
// 1 - Pedra 2 - Tesoura 3 - Papel 

while (vbot + vplayer < qnt || tst == 1){
     var bot = Math.floor(Math.random() * (4 - 1) + 1)
     console.log("\nEscolha do bot: "+bot)
      console.log("\nPedra = 1 | Tesoura = 2 | Papel = 3\n") 
        var player = prompt("Escolha seu número: ")
   if (player == bot){
    console.log("Empate!")
   } else if ((player==2) && (bot==1)){
    console.log("Você perdeu!")
    vbot++;
   } else if ((player==2) && (bot==3)){
    console.log("Você ganhou!")
    vplayer++;
    } else if ((player==1) && (bot==3)){
    console.log("Você perdeu!")
    vbot++;
    } else if ((player==1) && (bot==2)){
    console.log("Você ganhou!")
    vplayer++;
    } else if ((player==3) && (bot==1)){
    console.log("Você ganhou!")
    vplayer++;
    } else if ((player==3) && (bot==2)){
    console.log("Você perdeu!")
    vbot++;
    var tst = +prompt("tst: ")
   } 
 console.log ("\nSim = 1 | Não = 0: ")
 var tst = +prompt("Deseja jogar novamente?: ")
  console.log ("\nSua pontuação: "+vplayer)
 console.log ("Pontuação do BOT: "+vbot)
} 

 
