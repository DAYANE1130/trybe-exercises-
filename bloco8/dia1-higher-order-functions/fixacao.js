// function sum (number1, number2) {
//   return number1 + number2;
// }

// const sumVariable = sum;

// console.log(sumVariable);
// //  [Function: sum]

// const sum = (number1, number2) => {
//   return number1 + number2;
// };
//  sum(1,2);
// console.log(sum (1,2));

// const sayHello = () => {
//   return ('hello trybers');
// }

// const printGreeting = (callback) => {
//     console.log(callback());
// }

// printGreeting(sayHello);

// const sumFixAmount = (amount) => {
//   return (number) => amount + number;

// }

// const initialSum = sumFixAmount(15)
// console.log(initialSum(6));

//
const wakeUp = ()=> 'acordando';
const coffe = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

// Ao chamar a função doingThings:


 const doingThings = (callback)=>{
   const resultado = callback();
   console.log(resultado);
 }
// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!
doingThings(wakeUp);
doingThings(coffe);
// doingThings(sleep);

// const calculadora =(operacoes)=>{
//   const operacaoEscolhida= operacoes();
// console .log(operacaoEscolhida);
 
// }
//  const soma= (num1, num2) => num1 + num2;
//  const sub= (num1, num2) => num1 - num2;

// soma();
// sub();

// calculadora(soma(1,2));