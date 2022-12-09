//      Lambda/arrow function

/* 
    Naujoviškas, lengvesnis funkcijos užrašymo būdas.
    Tai - standartizuotas funkcijų užrašymo būdas nuo Ecma6 (2015 metų). Trumpesnis, patogesnis, nereikalaujantis callbacku.
*/
// Senuoju
function daugyba(par1, par2){
    return par1*par2;
}

// Naujuoju (lambda/arrow)
let daugyba1=(par1, par2) => par1 * par2;

// sintakse lambda
/* 
    parametras => veiksmas // 1 budas

    (parametras1, parametras2) => veiksmas //2 budas


    (parametras1, parametras2) => { //3budas
        veiksmas1
        veiksmas2

        return ats;
    }


    let pavadinimas = (parametras1, parametras2) =>  {return veiksmas} // kai reikia pavadinti funkciją
*/

//1  Parašykite lambda, kuri grąžina tekstą "Labas!".

let task1 = () => 'Labas!';

//2 Parašykite lambda, kuri grąžina dviejų kintamųjų sudėtį.

let task2 = (pirmas, antras) => pirmas+antras;


//3 Parašykite lambda, kuri grąžina jai paduoto teksto ilgį.
let task3 = (a) => a.length; //reikia su kabutem

//4 Parašykite lambda, kuri grąžina jai paduoto teksto pirmąją raidę.

let task4 = (b) => b[0];

//5 Parašykite lambda, kuri grąžina jai paduoto teksto paskutinę raidę.

let task5 = (b) => b[b.length-1];

//6 Parašykite lambda, kuri grąžina jai paduoto skaičiaus kvadratą.

let task6= (number) => Math.pow(number,2);

//7 Parašykite lambda, kuri iš jai paduoto masyvo išveda visus kintamuosius į konsolę.

let task7 = (masyvas) => console.log(masyvas);

//8  Parašykite lambda, kuri iš jai paduoto masyvo išveda kas antrą kintamąjį į konsolę.
let task8 = (masyvas1) =>{
  for(let i = 0; i < masyvas1.length; i+=2){
  console.log(masyvas1[i]);}
}

//9 
let kintamieji4 = (masyvas3, kaskelinta) => {
  for (let i = 0; i < masyvas3.length; i += kaskelinta) {
    console.log(masyvas3[i]);
  }
}
//12   Parašykite lambda, kuri iš jai paduoto string masyvo į konsolę išveda tik žodžius ilgesnius nei 3 simbolių. 

let task11 = (masyvas) =>{
  for(let i= 0; i < masyvas.length;i++){
    if(masyvas[i].length>3){
      console.log(masyvas[i]);
    }
  }
}
 //13  Parašykite lambda, kuri iš jai paduoto string masyvo į konsolę išveda tik žodžius, kurie prasideda kažkokia (nurodyta) raide.

 let task13 = (masyvas, raide) =>{
  for(let i= 0; i < masyvas.length;i++){
    if(masyvas[i][0].includes(raide)){
      console.log(masyvas[i]);
    }
  }
 }



 
//15   Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su string kintamaisiais.


let task15 = (array) =>{
  for(let i= 0; i < array.length; i++){
      if(typeof(array[i]) === "string"){
          console.log(array[i])
      } else {}
  } 
}
 //16  Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su string kintamaisiais, kurie yra ilgesni nei A. (A - trumpiausias galimas žodžio ilgis).



//18
// let nauji = [];  

// let task18 = (masyvas) => {
//   for (i=0; i < masyvas.length; i++){
//     if (typeof(masyvas[i] === 'number'){
//       naujas.push(masyvas[i]);
//       { else {};
//         console.log(nauji);
//       }
//     })
//   }
// }

//19  Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su number kintamaisiais, kurie yra didesni negu A. (A - mažiausias galimas skaičius).




//20   Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su number kintamaisiais, kurie yra mažesni negu A. (A - didžiausias galimas skaičius).


//21   Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su number kintamaisiais, kurie yra didesni negu A, bet mažesni negu B. (A - mažiausias galimas skaičius, B - didžiausias galimas skaičius).



// Masyvų metodai




/* 
Iteraciniai masyvų metodai 
Iteruoja per masyv1 ir leidžia atlikti kažkokį veiksmą su kiekviena iteracija. 
Naudinga tose situacijose, kai negalime naudotis paprasto for.




forEach() -     vieną kartą vykdo pateiktą funkciją kiekvienam masyvo elementui.

pavyzdys :
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
______________________
map() -  grąžina naują masyvą su pateiktos funkcijos iškvietimu kiekviename šio masyvo elemente.
pavyzdys :
const array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(x => x * 2); //šioje eilutėje 1*2;4*2..... sudaugina visus masyvo skaičius su 2

console.log(map1);
// expected output: Array [2, 8, 18, 32]
______________________

filter() - isfiltruotuoja is masyvo elementus pagal pateikta salyga. 
Pvz: const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
    // expected output: Array ["exuberant", "destruction", "present"
______________________

reduce() -  metodas grąžina vieną reikšmę juo kaires i desine: sukauptą funkcijos rezultatą.

Pavyzdys:
const numbers = [2, 4, 6];
const sum = numbers.reduce(function(sum, number) {
const updatedSum = sum + number;
return updatedSum;
}, 0);
sum; // 12
_____________________

reduceRight() -  mazina masyva is desines i kaire iki vienos reiksmes.
var numbers = [65, 44, 12, 4];

function getSum(total, num) {
    return total + num;
}
function myFunction(item) {
    document.getElementById("demo").innerHTML = numbers.reduceRight(getSum);
}
sum: // 125
_____________________
some() - Grąžina true, jei bent vienas masyvo elementas išlaiko pateiktos funkcijos atliktą testą.
// Code
const list = [1, 2, 3, 4, 5];
list.some((el) => el === 3); // true
list.some((el) => el === 6); // false
_______________________
every() - Grąžina tiesa, jei visi masyvo elementai išlaiko pateiktos funkcijos atliktą testą.
// Code
const list = [1, 2, 3, 4, 5];
list.every((el) => el === 3); // false
__________________________________________________________________________

find() - Metodas find() grąžina pirmąjį pateikto masyvo elementą, kuris atitinka pateiktą testavimo funkciją. Jei jokios reikšmės netenkina testavimo funkcijos, grąžinamas neapibrėžtas.

const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);
// expected output: 12
_______________
findIndex() - Metodas findIndex() grąžina pirmojo masyvo elemento indeksą, atitinkantį pateiktą testavimo funkciją. Jei nė vienas elementas netenkina testavimo funkcijos, grąžinamas -1.

const array = [5, 12, 8, 130, 44];
array.findIndex((element) => element > 13); // 3
_______________

findLast() - Metodas findLast() kartoja masyvą atvirkštine tvarka ir grąžina pirmojo elemento, kuris tenkina pateiktą testavimo funkciją, reikšmę. Jei jokie elementai netenkina testavimo funkcijos, grąžinamas neapibrėžtas.

const array1 = [5, 12, 50, 130, 44];
const found = array1.findLast((element) => element > 45);
console.log(found);
// expected output: 130
________________
findLastIndex() - Metodas findLastIndex() kartoja masyvą atvirkštine tvarka ir grąžina pirmojo elemento, atitinkančio pateiktą testavimo funkciją, indeksą. Jei nė vienas elementas netenkina testavimo funkcijos, grąžinamas -1.

const array1 = [5, 12, 50, 130, 44];
const isLargeNumber = (element) => element > 45;
console.log(array1.findLastIndex(isLargeNumber));
// expected output: 3  (of element with value: 130)
__________________

flatMap() - flatMap()Array flatMap“ () metodas pirmiausia susieja kiekvieną elementą naudodamas atvaizdavimo funkciją, 
tada suploja jį į naują masyvą. Sujungia flat() ir map() metodus i viena.

let flatmapPvz = ["nesusiprateliu konfideracija", ["MEOW ", "jau"], "man galva ", ["plysta"]];
console.log(flatmapPvz.flatMap((element) => element)); 
// expected output 
["nesusiprateliu konfideracija, MEOW , jau, man galva, plysta"]
///arba kad aiskiau su skaiciais
const arr1 = [1, 2, [4, 5], 6, 7, [8]] ;
console.log(arr1.flatMap((element) => element)); 
// expected output 
[1, 2, 4, 5, 6, 7, 8]

______________________
sort()- metodas surusiuoja masyvo elementus.

///string rusiavimas, pagal abecele
let months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

//skaiciu rusiavimas pagal skaicius maziausias nuo didziausio, bet tikrina tik pirmus skaicius 
let arrayRusiavimas = [1, 30, 4, 21, 100000];
array1.sort();
console.log(arrayRusiavimas);
// expected output: Array [1, 100000, 21, 30, 4]



*/









        // Neiteraciniai


/* 
fill() - Metodas pakeičia visus masyvo elementus į statinę reikšmę, nuo pradžios indekso (numatytasis 0) iki pabaigos indekso (numatytasis masyvas.ilgis). Jis grąžina pakeistą masyvą.

const array1 = [1, 2, 3, 4];
// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]
// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]
console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]
__________________________________
flat() - metodas sukuria naują masyvą su visais antrinio masyvo elementais, rekursyviai sujungtais į jį iki nurodyto gylio.

const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]
const arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]
_____________________________________
from() - sukuria naują, negiliai nukopijuotą Array egzempliorių iš kartojamo arba į masyvą panašaus objekto.

console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
____________________________________
includes() - metodas include() nustato, ar masyve yra tam tikra reikšmė tarp savo įrašų, atitinkamai grąžinant true arba false.

const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false
____________________________________ 
at() - paima sveikojo skaičiaus reikšmę ir grąžina elementą pagal tą indeksą, leidžiantį naudoti teigiamus ir neigiamus sveikuosius skaičius. Neigiami sveikieji skaičiai skaičiuojami nuo paskutinio masyvo elemento.

pavyzdys : 
const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(Using an index of ${index} the item returned is ${array1.at(index)});
// expected output: "Using an index of 2 the item returned is 8"

index = -2;

console.log(Using an index of ${index} item returned is ${array1.at(index)});
// expected output: "Using an index of -2 item returned is 130"
_________________________________________________________
concat() - metodas naudojamas sujungti du ar daugiau masyvų. Šis metodas nekeičia esamų masyvų, o grąžina naują masyvą

pavyzdys :

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
_________________________________________________
copyWithin()  -  CopyWithin() metodas sekliai nukopijuoja dalį masyvo į kitą vietą tame pačiame masyve ir grąžina ją nekeisdamas ilgio.

pavyzdys : 
const array1 = ['a', 'b', 'c', 'd', 'e'];

// copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4)); 
// expected output: Array ["d", "b", "c", "d", "e"]

// copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// expected output: Array ["d", "d", "e", "d", "e"]
___________________________________________________

4. entries() -  Metodas entries() grąžina naują masyvo iteratoriaus objektą, kuriame yra kiekvieno masyvo indekso raktų/reikšmių poros.

pavyzdys :
const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// expected output: Array [0, "a"]

console.log(iterator1.next().value);
// expected output: Array [1, "b"]
______________________________
//isArray() - statinis metodas nustato, ar perduota reikšmė yra masyvas.
//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//let result =  Array.isArray(fruits);
//document.getElementById("demo").innerHTML = result;
__________________________________
/join() - metodas sukuria ir grąžina naują eilutę, sujungdamas visus masyvo (arba į masyvą panašaus objekto) elementus, atskirtus kableliais arba nurodyta skyriklio eilute. Jei masyve yra tik vienas elementas, tada tas elementas bus grąžintas nenaudojant skyriklio.
//pavyzdys : 
//const elements = ['Fire', 'Air', 'Water'];
//console.log(elements.join());
// expected output: "Fire,Air,Water"
____________________________________
//keys() - metodas grąžina naują Array Iterator objektą, kuriame yra kiekvieno masyvo indekso raktai.
//pavyzdys :
//const array1 = ['a', 'b', 'c'];
//const iterator = array1.keys();
//for (const key of iterator) {
  //console.log(key);
//}

// expected output: 0
// expected output: 1
// expected output: 2
___________________________________
//of() - metodas sukuria naują masyvo egzempliorių iš kintamo argumentų skaičiaus, neatsižvelgiant į argumentų skaičių ar tipą.
//pavyzdys :
//function NotArray(len) {
    //console.log("NotArray called with length", len);
  //}
  //console.log(Array.of.call(NotArray, 1, 2, 3));
  // NotArray called with length 3
  // NotArray { '0': 1, '1': 2, '2': 3, length: 3 }
  //console.log(Array.of.call(Object)); // [Number: 0] { length: 0 }
_______________________________________
pop() - išima paskutinį masyvo elementą.
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]


 push() - 
Push() metodas prideda vieną ar daugiau elementų į masyvo pabaigą ir grąžina naują masyvo ilgį.
const animals = ['pigs', 'goats', 'sheep'];
_______________________

const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
__________________________
 reverse() - apsuka masyva.
 const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

items.reverse();
console.log(items); // [3, 2, 1]
____________________________

 shift() - sis metodas pašalina pirmąjį elementą iš masyvo.
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]
________________________________
//slice()- Šis metodas išskaido dalį masyvo į naują masyvą. 
// pvz situoj situacijos a yra indeksas, nuo kurio prasideda pjūvis 
//ir b yra indeksas, kuriame jis baigiasi, neįskaitant b. 
//Jei nėra pabaigos indekso, ty b, tada visi kiti elementai prasideda nuo a yra supjaustytas.
let masyvas = [1,2,3,4];
let masyvasSlice = masyvas.slice(1,3)
console.log(masyvasSlice)
//expected output [2,3]

//splice()- Šis metodas naudojamas norint ištrinti ir įterpti naujus elementus.
//Čia a yra indeksas, kuriame norime įterpti / ištrinti elementus ir b yra elementų, kurie bus ištrinti, skaičius.
//Viskas, kas pridėta po šių parametrų, pvz a ir b bus įterptas į rodyklę a.


//Elementu istrynimas
let masyvasSpliceIstrynimas = masyvas.splice(0,1);
console.log(masyvasSpliceIstrynimas)
//expected output [2,3,4]

//Elementu pridejimas
let masyvasSplicePridejimas = masyvas.splice(0,1,-1);
console.log(masyvasSplicePridejimas)
//expected output [-1,2,3,4]



//unshift()-Šis metodas pradžioje prideda naują elementą
let masyvasUnshift = masyvas.unshift(0);
console.log(masyvasUnshift)
//Išvestis: [0,1,2,3,4]

//toString()- pavercia konvertuoja masyvo elementus i string elementus. 
let masyvasToString = masyvas.toString()
console.log(masyvasToString)
///Išvestis: 1,2,3,4


//values()-The values() method returns a new Array Iterator object that contains the values for each index in the array.
let languages = ["JavaScript", "Java", "C++"];

// returns an Array Iterator object that contain values
let iteratorObject = languages.values();

// looping through iterator
for (let value of iteratorObject) {
  console.log(value);
}

// Output:
// JavaScript
// Java
// C++

//toLocateString()-method returns a string representing the elements of the array in a particular locale.
let array1 = ["Nepal", 1];

// returns string representation of array
let stringFromArray = array1.toLocaleString();

console.log(stringFromArray);

// Output:
// Nepal,1
*/
//______________________________________________



//Neiteraciniai



  


//1  Parašykite funkciją, kuri iš jai duotojo masyvo suformuotų ir grąžintų string'ą.
let arrString = array=>{
  let naujas="";
  array.forEach((element)=>naujas+=element.toString());
  return naujas;
}
console.log(arrString(["kas","buvo","aha", 11, 6, false, "as"]));
//2 

let apverstas = (array)=>{
  let naujas2=[];
  for(let i = array.length-1; i >= 0; i--){naujas2.push(array[i])};
  return naujas2;
}
console.log(apverstas(["One","Two","Three","Four","Five"]));


//3 Parašykite funkciją, kuri iš jai paduoto masyvo randa ir išspausdina didžiausią ir mažiausią skaičius. (galima su forEach arba paprastu for)

let findMaxMin = (array) => {
  let largest = array[0];
  let smalest = array[0];
  for(let i = 0; i < array.length; i++) {
     if(array[i] > largest) {
        largest = array[i];
     }
     else if (array[i] < smalest) {
        smalest = array[i];
     }
  };
  return {
     smalest, largest
  }
 }

//4   Parašykite funkciją, kuri iš 2 jai paduotų masyvų grąžina(išveda į konsolę) pasikartojančias reikšmes. (jeigu yra dvi vienodos reikšmės abejuose masyvuose, ta reikšmė turi būti išvesta į konsolę.

// let pasikartojantys = (array1,array2)=>{
//   array1.forEach(element)=>{
//      for(let antrasArr of array2){
//         if(element===antrasArr){console.log(element); break};
//      }
//   };
// }
// console.log(pasikartojantys(["labas","yes","dada", "eggo",3],["labas","no","ahaha","eggo",3]));

let mas4_1 = [1,2,3,4,5,6,7];
let mas4_2 = [1,2,4,7,8,9,];
let vienodi = (arr1, arr2) => {
  for(let i=0; i<arr1.length; i++){
    arr2.includes(arr1[i], arr1[i]); // tikrins, ar abiejuose yra tas elementas
  }
}


//5   Parašykite funkciją, kuriai padavus du masyvus (pirmas: informacijos, antras: indeksų), suformuotų naują masyvą iš pirmojo, paimdamas tik tas reikšmes, kurios nurodytos indeksuose. (pirmas=["a","b","c","d","e","f"], antras=[0,3,4], naujas=["a","d","e"])
const arr3 = ['a', 'b', 'c', 'd', 'e', 'f'];
const arr4 = [0, 3, 4];
const newArr = formArray(arr3, arr4);
function formArray(arr3, arr4) {
  let newArr = [];
  for (const val of arr4) {
    newArr.push(arr3[val]);
  }
  return newArr;
}

console.log(newArr);


//////////////////////////////////////////////////////////////////////////////////

let mokinimuisiSkirtasMasyvas = [4,6,1,"zodziu",false,false,4,'naujas'];

// forEach - neatlieka kažko extra
/* minusai
  Negali būti sustabdytas (break)
  Negrąžina jokios reikšmės (return)
*/
console.groupCollapsed("forEach");
mokinimuisiSkirtasMasyvas.forEach(elementas => console.log("Masyvo elementas: ", elementas));
console.log('');
mokinimuisiSkirtasMasyvas.forEach((elementas, iteracija) => console.log("Masyvo "+ iteracija +" elementas: ", elementas));
console.log('');
mokinimuisiSkirtasMasyvas.forEach((elementas, iteracija, masyvas) => console.log("Masyvo "+ iteracija +" elementas: ", elementas, ';  Sekantis elementas yra: ', masyvas[iteracija+1]));
console.groupEnd();

// map - grąžina naują kažkaip modifikuotą masyvą.
let naujasMasyvas = mokinimuisiSkirtasMasyvas.map(element => element+5);
console.log(naujasMasyvas);
console.log(mokinimuisiSkirtasMasyvas);

// filter - grąžina naują masyvą, kuris atitinka nurodytą sąlygą
let naujasFiltruotasMasyvas = mokinimuisiSkirtasMasyvas.filter(element => typeof(element) === "string");
console.log(naujasFiltruotasMasyvas);
console.log(mokinimuisiSkirtasMasyvas);


// reduce - grąžina reikšmę, kuri susideda iš viso masyvo modifikuotų elementų
//reduceRight - grąžina reikšmę nuo galo link pradžios.


let reduceintasMasyvas = mokinimuisiSkirtasMasyvas.reduce((bendras, elementas) => {
  console.log(bendras);
  return bendras + ' ' + elementas;
}, 'pradžia');
console.log(reduceintasMasyvas);
console.log(mokinimuisiSkirtasMasyvas);

//some  - tikrina, ar yra kokia reikšmė (bent vienas)  






//every - tikrina, ar kiekvienas turi kažkokią reikšmę. (ar visi)























