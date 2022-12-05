1//
function sudetis(nr1, nr2) {
    if(typeof(nr1)==="number" && typeof(nr2)==="number"){
        let atsakymas = nr1 + nr2;
        return atsakymas;
      } else {
        return "Reikalingi skaiciai";
      }
}

function atimtis(nr1, nr2) {
    let atsakymas = nr1 - nr2;
    return atsakymas;
}

function daugyba(nr1, nr2) {
    let atsakymas = nr1 * nr2;
    return atsakymas;
}
function dalyba(nr1, nr2) {
    let atsakymas = nr1 / nr2;
    return atsakymas;
}

function laipsnis(nr1, nr2) {
    let atsakymas = nr1 ** nr2;
    return atsakymas;
}
function saknis(nr1, nr2) {
    return nr1 ** (1/nr2);

}
function liekana(nr1, nr2) {
    let atsakymas = nr1 % nr2;
    if (atsakymas != 0) {
    return "Liekana" + atsakymas;
    } else {
        return (0);
    }
}
2//
{
function firstToLast(array){
    // for (let element of array) {
    //     console.log(element);
    // }   
    for(let i=0; i < array.length; i++){
      console.log(array[i]);
    }
}
}
//3
{
function lastToFirst(array){
    for(let i = array.length - 1 ; i >=0; i--){
        console.log(array[i]);
    }
}
}
//4


// let masyvasStrings1 = ['as', 'tu', 'mes', 'jūs', 'jie', 'jos'];
// function sortStrings(masyvasStrings1){
//     return masyvasStrings1.sort(function(a,b){return a.locateCompare (b)})
// }
// console.log(sortStrings(masyvasStrings1));

//5

let du = [1, 8, 101010, 2, 3, 5, 10];
function sortink(du){
    return du.sort(function(a,b){return a-b})
}
console.log(sortink(du));


6//
// 
    function nuoIki(nr1, nr2){
        let arrayToReturn = [];
        for(let i = nr1; i <= nr2; i++){
          arrayToReturn.push(i);
        }
        return arrayToReturn;
      }
7//

function nuoIkiZingsniu(step, nr1, nr2){
    let arrayToReturn = [];
    for(let i = nr1; i <= nr2; i+=step){ 
      arrayToReturn.push(i);
    }
    return arrayToReturn;
  }


8//
//Sukurkite funkciją, kuri paims du parametrus - vardą ir pavardę - ir grąžins sumą šių žodžių ilgių (t.y. "Petras", "Petrauskas" => 16).

function petras(nr1, nr2){
  let atsakymas = nr1.length + nr2.length; 
  return atsakymas;
}

//9
//Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abecelės raidę (pvz. 0 => A; 1 => B; 2 => C ir t.t.). Hint: Jums reikės pirma sukurti Array su visomis raidėmis (["A", "B", C",..."Z"]), o funkcija paims pagal indeksą atitinkamą raidę.


    function atiduok(number){
      const abecele = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
      return abecele[number-1];
      // for(const i=0; i < abecele.length; i+=2){
      //  if(typeof(atiduok[number]) === 'number');
      //   return abecele[number];
      // }
    }


//10
//Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). Operator gali būti "sum", "sub", "div", "multi" (matematinės reikšmės - sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9...). Hint: Reikės funkcijoje naudoti if-else arba switch.


function ten(n1, n2, operator){
  switch(n1, n2, operator){
    case 'sum':
    let sum = n1 + n2
    console.log(sum + ' suma');
    break;
    case 'div':
    let div = n1 / n2
    console.log(div + ' dalyba');
    break;
    case 'min':
    let min = n1 - n2
    console.log(min + ' minus');
    break;
    case 'kart':
    let kart = n1 * n2
    console.log(kart + ' daugyba');
    break;
  }
}


//11
//Sukurkite dvi funkcijas: viena grąžina random skaičių nuo 1 iki 10 (įskaitant), kita - gautą skaičių pakelia kvadratu. Iškviesk abi funkcijas vienoje eilutėje (pvz. squareNum(generateRandomNumber()) => 1...100).

function randomNumber(){
  for(let i = 0; i <= 10; i++){
  return Math.ceil(Math.random()*11);
}
}
function pakelti(){
  return randomNumber() ** 2;
}


//extra0 
// let pirmas=[1, 2, 3, 4, 5, 6, 7]
// let antras=['a', 'b', 'c']
// do{
// pirmas.splice(antras.length, 0, antras.pop())
// console.log(pirmas);
// } while (antras.length > 0);
let masyvas1 = [1 , 2 , 3,4,5,6,7];
let masyvas2 = ['a', 'b', 'c']
function fancyMasyvuJungimas(arr1, arr2){

  while(arr2.length) {
    arr1.splice(arr2.length, 0 , arr2.shift());
  }
  return arr1;
}
console.log(fancyMasyvuJungimas(masyvas1, masyvas2));