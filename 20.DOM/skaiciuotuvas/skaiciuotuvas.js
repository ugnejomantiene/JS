let calculator = document.querySelector("#calc");

console.dir(calculator);
calculator.children[0].addEventListener('submit', function(e){
  e.preventDefault();
  console.dir(e);
  let number1 = e.target.elements.number1.valueAsNumber;
  console.log(number1);
  let number2 = e.target.elements.number2.valueAsNumber;
  console.log(number2);
  let action = document.querySelector("#operator").value;
  let calculate;

  if ( action == "add") {
    calculate = number1 + number2;
  } else if (action == "min") {
    calculate = number1 - number2;
  } else if (action == "div") {
    calculate = number1 * number2;
  } else if (action == "mul") {
    calculate = number1 / number2;
   } else if (action == "degree") {
    calculate = Math.pow(number1,number2);
   } else if (action == "remains") {
    calculate = number1 % number2;
   } else if (action == 'root') {
    calculate = number1 * 1 / number2;
   }
  


  
document.querySelector('#results').innerHTML = calculate;

});
