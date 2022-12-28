//1) Parašykite funkciją, kuri iš jai duotojo masyvo suformuotų ir grąžintų string'ą.
let arrString = array=>{
    let naujas="";
    array.forEach((element)=>naujas+=element.toString());
    return naujas;
  }
  console.log(arrString(["kas","buvo","aha", 11, 6, false, "as"]));
  
//2) Parašykite funkciją, kuriai padavus kažkokį number kintamąjį (ilgą 10+ skaitmenų), jinai jį išvestų į konsolę su "-" simboliu tarp dviejų lyginių skaičių. (pvz: paduodi 0645234, grąžina 0-6-45234)
function printWithDashes(num) {
    const numString = String(num);
    let result = '';
  
    for (let i = 0; i < numString.length; i++) {
      const digit = numString[i];
  
      if (digit % 2 === 0 && numString[i - 1] % 2 === 0) {
        result += '-';
      }
      result += digit;
    }
  
    console.log(result);
  }
  console.log(printWithDashes(48978987987987));
//3) Parašykite funkciją, kuri atliktų tą patį, ką daro .reverse() metodas. (žinoma nenaudokite reverse)
function reverse(arr) {
    const result = [];
  
    for (let i = arr.length - 1; i >= 0; i--) {
      result.push(arr[i]);
    }
  
    return result;
  }
console.log(reverse([1,2,3,4,5,6,7,8,9,10]));

//4) Parašykite funkciją, kuri iš jai paduoto masyvo išrinktų nurodytas reikšmes ir grąžintų likusias (išvestų į konsolę). (paduodama masyvas=[1,4,5,6,4,8,4,5], funkcija: func(masyvas, 4,6,8), grąžina: [1,5,5]).


function filterArray(array, valuesToRemove) {
  // Išfiltruokite masyvą ir grąžinkite tik tas reikšmes, kurios nėra nurodytų reikšmių sąraše
  const filteredArray = array.filter(value => !valuesToRemove.includes(value));

  // Išvesti likusias reikšmes į konsolę
  console.log(filteredArray);

  // Grąžinti filtruotą masyvą
  return filteredArray;
}

// Pavyzdys naudojant funkciją
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const valuesToRemove = [2, 5, 9];

console.log(filterArray(numbers, valuesToRemove));




//5) Parašykite funkciją, kuri iš jai paduoto masyvo randa ir išspausdina didžiausią ir mažiausią skaičius.


function findMinMax(array) {
  // Nustatykite mažiausią ir didžiausią reikšmes, pradedant nuo pirmo elemento masyve
  let min = array[0];
  let max = array[0];

  // Eikite per visus masyvo elementus ir palyginkite juos su min ir max reikšmėmis
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }

  // Išspausdinkite min ir max reikšmes
  console.log(`Min: ${min}`);
  console.log(`Max: ${max}`);
}

// Pavyzdys naudojant funkciją
const belekas = [1, 2, 3, 4, 5, 6, 7, 8, 9];

findMinMax(belekas);
//6) Parašykite funkciją, kuri iš 2 jai paduotų masyvų grąžina(išveda į konsolę) pasikartojančias reikšmes. (jeigu yra dvi vienodos reikšmės abejuose masyvuose, ta reikšmė turi būti išvesta į konsolę.

function findDuplicates(array1, array2) {
  // Sukurkite masyvą, kuriame bus laikomos pasikartojančios reikšmės
  const duplicates = [];

  // Eikite per pirmą masyvą ir patikrinkite ar ši reikšmė yra antrame masyve
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      // Jeigu taip, pridėkite šią reikšmę į duplicates masyvą
      duplicates.push(array1[i]);
    }
  }

  // Išspausdinkite duplicates masyvą
  console.log(duplicates);
}

// Pavyzdys naudojant funkciją
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

findDuplicates(array1, array2);
// Output: [3, 4, 5]
// Ši funkcija priima du argumentus - du masyvus, kuriuose norite rasti pasikartojančias reikšmes. Jos viduje, ji sukuria masyvą, kuriame bus laikomos pasikartojančios reikšmės. Po to, ji eina per pirmą masyvą ir patikrina ar kiekviena reikšmė yra antrame masyve naudodama Array.prototype.includes() metodą. Jeigu reikšmė yra antrame masyve, ji prideda šią reikšmę į duplicates masyvą. Galiausiai, ji išspausdina duplicates masyvą.





//7) Parašykite funkciją, kuriai padavus du masyvus (pirmas: informacijos, antras: indeksų), suformuotų naują masyvą iš pirmojo, paimdamas tik tas reikšmes, kurios nurodytos indeksuose. (pirmas=["a","b","c","d","e","f"], antras=[0,3,4], naujas=["a","d","e"])

function getValuesAtIndices(array, indices) {
  // Sukurkite masyvą, kuriame bus laikomos reikšmės iš pirmojo masyvo
  const values = [];

  // Eikite per visus indeksus antrame masyve
  for (let i = 0; i < indices.length; i++) {
    // Gauti reikšmę iš pirmojo masyvo naudojant indeksą iš antrojo masyvo
    const value = array[indices[i]];

    // Pridėkite gautą reikšmę į values masyvą
    values.push(value);
  }

  // Grąžinkite values masyvą
  return values;
}

// Pavyzdys naudojant funkciją
const array = ["a", "b", "c", "d", "e", "f"];
const indices = [0, 3, 4];

const newArray = getValuesAtIndices(array, indices);
console.log(newArray);
// Output: ["a", "d", "e"]
//Ši funkcija priima du argumentus - du masyvus, pirmasis yra masyvas, iš kurio norite gauti reikšmes, o antrasis yra masyvas su indeksais, kurie nurodo, kurios reikšmės iš pirmojo masyvo turi būti gautos. Jos viduje, ji sukuria masyvą, kuriame bus laikomos reikšmės iš pirmojo masyvo. Po to, ji eina per visus indeksus antrame masyve ir naudoja juos, kad gautų reikšmes iš pirmojo masyvo. Tada ji prideda gautas reikšmes į values masyvą. Galiausiai, ji grąžina values masyvą.





//8) Parašykite funkciją, kuri iš jai paduoto masyvo atrinktų ir į konsolę išspausdintų tik unikalius duomenis.

function printUniqueValues(array) {
  // Sukurkite masyvą, kuriame bus laikomos unikalios reikšmės
  const uniqueValues = [];

  // Eikite per visus masyvo elementus
  for (let i = 0; i < array.length; i++) {
    // Patikrinkite ar ši reikšmė yra unikali
    if (!uniqueValues.includes(array[i])) {
      // Jeigu taip, pridėkite šią reikšmę į unikalios reikšmės masyvą
      uniqueValues.push(array[i]);
    }
  }

  // Išspausdinkite unikalias reikšmes
  console.log(uniqueValues);
}

// Pavyzdys naudojant funkciją
const things = [1, 2, 3, 3, 4, 4, 4, 5, 5];

printUniqueValues(things);
// Output: [1, 2, 3, 4, 5]
//9) Parašykite funkciją, kuri iš jai paduotų masyvų (2 arba daugiau) atrenka ir išspausdina tik tuos duomenis, kurie kartojasi visuose masyvuose.
let masyvas7_1 = [1,2,3,4];
let masyvas7_2 = [2,3,4,5];
let masyvas7_3 = [3,4,5,6,7,9,8];
let masyvas7_4 = [9,5,4,3,5,4,2,6];
let masyvas7_5 = [5,4,3,5,4,2,6,1,2,3];

let task9 = (...masyvai) => {
  let atsakymas = [];
  let kartojasi = masyvai[0];

  masyvai.forEach(masyvas => {
    kartojasi.forEach((element, i) => {
      if(!masyvas.includes(element)){
        kartojasi[i] = null;
      }
    });
  });
  for(let i = 0; i < kartojasi.length; i++){
    if(kartojasi[i] !== null){
      atsakymas.push(kartojasi[i]);
    }
  }
  console.log(atsakymas);
}

task9(masyvas7_3, masyvas7_4, masyvas7_5);
//10) Parašykte funkciją, kuri iš jai paduoto skaičių masyvo atrinktų n'tąjį didžiausią skaičių. (iš funkcija([12,54,1,65,78,91,45],3) grąžintų 65).
function getNthLargestNumber(array, n) {
  // Surūšiuokite masyvą didėjimo tvarka
  array.sort((a, b) => a - b);

  // Gauti n'tąjį didžiausią skaičių (n-1, nes indeksai masyve prasideda nuo 0)
  const nthLargestNumber = array[array.length - n];

  // Grąžinkite n'tąjį didžiausią skaičių
  return nthLargestNumber;
}

// Pavyzdys naudojant funkciją
const shit = [12, 54, 1, 65, 78, 91, 45];
const n = 3;

const nthLargestNumber = getNthLargestNumber(shit, n);
console.log(nthLargestNumber);
// Output: 65