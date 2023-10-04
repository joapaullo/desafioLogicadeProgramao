/*
 Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência
(XP) de um herói, depois utilize uma estrutura de decisão para apresentar 
alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**" */

 
let nome = "joaozinho";
let quantExperiencia =" platina" ; 

function entrada(nome, quantExperiencia){
    // Variavéis: 
    let nivel = " ouro"; //Variável em branco para o nível do herói.
    
    // Estrutura de Decisões:
    if (quantExperiencia >=1000){ //Verifica se o herói tem um saldo menor ou igual a 1000.
        nivel = "Ferro"
    } else if (quantExperiencia >= 1001 && quantExperiencia <= 2000) { //Verifica se o herói tem um experiencia entre 1001 e 2000.
        nivel = "Bronze"
    } else if (quantExperiencia >= 2001 && quantExperiencia <= 5000) { //Verifica se o herói -- / --------------- / ----
        nivel = "Prata"
    } else if (quantExperiencia >= 6001 && quantExperiencia <= 7000) { 
        nivel = "Ouro"
    } else if (quantExperiencia >= 7001 && quantExperiencia <= 8000) { 
        nivel = "Platina"
    } else if (quantExperiencia >= 8001 && quantExperiencia <= 9000) { 
        nivel = "Ascendente"
    } else if (quantExperiencia >= 9001 && quantExperiencia <= 10000) { 
        nivel = "Imortal"
    } else { //Pela lógica, ao não passar por nenhuma das condições acima, o herói tem mais de 1000 de saldo e aqui é executado.
        nivel = " Radiante"
    }
}

console.log( " O Herói "  + nome +  " está no nível " + quantExperiencia + " de experiência  ");
