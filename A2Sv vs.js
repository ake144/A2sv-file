/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var answer = [];
 while(n) { if((n % 15)==0){
         answer.unshift("FizzBuzz")}
     else if((n %3)==0){
         answer.unshift("Fizz");
     }
    
     
     else if((n % 5)==0){
         answer.unshift("Buzz");
     }else{
         answer.unshift('' + n);
     }
     n--;
     
 }
   return answer;

    
};
