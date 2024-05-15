/*

02 - Encontre o menor número de um array

Escreva um algoritmo que recebe um array de números inteiros, procure o menor valor e o retorne.

*/

const getMinNumber = (numbers)=> {
  let minNumber = numbers[0]
  for (let index=0;index < numbers.length;index +=1){
    if(numbers[index]< minNumber){
      minNumber = numbers[index]
    }

  }

    return minNumber;

}

const menorNumber = getMinNumber([0,70,30,40,90,2,1,5,7]);
console.log(menorNumber)



module.exports = getMinNumber;
