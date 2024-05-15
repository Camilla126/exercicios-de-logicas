/*

01 - Verifica se pessoa tem idade para dar entrada na CNH

Escreva um algoritmo que recebe o nome e ano de nascimento de uma pessoa e verifique se ela pode dar entrada na CNH.

Se a pessoa tiver menos de 18 anos retorne:
------------------------------------------------------
"x tem y anos de idade e não pode iniciar o processo."
------------------------------------------------------

Caso contrário:
--------------------------------------------------
"x tem y anos de idade e pode iniciar o processo."
--------------------------------------------------

*/
const Fernanda = 2006;
const idade = 17;
function cnhProcess(name, birthYear){
 if (Fernanda < 18){
  return 'Fernanda tem ${idade} não pode iniciar o processo.'
}else {
  return 'Fernanda tem ${idade} e pode iniciar o processo.'
}
}

console.log(cnhProcess())

module.exports = cnhProcess;