// Let
let letVal = 0;
{
   let letVal = 1;
}

console.log('letVal = ', letVal);

console.log('== Redeclaration ==');

// Redeclaration Error on let
let letVal1 = 1;
// Error
// let letVal1 = 2; 


console.log('== 선언 이전에 변수 사용(Hoisting)');

console.log('varVal2 = ', varVal2); // No Error, undefined
var varVal2 = '선언 이전에 사용된 var 변수';

try {
   console.log('letVal2 = ', letVal2); // Error
} catch (error) {
   console.log('선언 이전에 let 변수 사용 에러 발생');
   
}
let letVal2 = 'letVal2 is not defined Error';