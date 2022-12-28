
// 1) Pasirašyti / susikurti string kintamąjį.
let kintamasis1 = "Labas";

// 2) Pasirašyti / susikurti number kintmąjį.
let kintamasis2 = 2;

// 3) Pasirašyti / susikurti masyvą tik su string kintamaisiais.
let stringuMasyvas = ['aš', 'tu', 'jis', 'ji', "tarakonas"];

// 4) Pasirašyti / susikurti masyvą tik su number kintamaisiais.
let skaiciuMasyvas = [1,2,3,4,5,6,10];

// 5) Pasirašyti / susikurti masyvą ir su string ir su number kintamaisiais.
let stringIrSkaiciuMasyvas = ['Katinas', 'Namas', 1, 2, 3];

// 6) Išvesti pirmąją 1'os užduoties kintamojo raidę.
console.log(kintamasis1[0]);

// 7) Išvesti paskutinę 1'os užduoties kintamojo raidę.

console.log(kintamasis1[kintamasis1.length-1]);

// 8) Išvesti viduriniąją 1'os užduoties kintamojo raidę.

console.log(kintamasis1[2]);

// 9) Pasirašyti funkciją, kuri iš jai pateikto string kintamojo išvestų jai nurodytą raidę (kelintąją). Pvz.:(uzd9("labas", 3) => "b").

function atsakymas(zodis, kelintaRaide) {
    return zodis.charAt(kelintaRaide - 1);
  }
  
console.log(atsakymas("makaronai", 5));

// 10) Patikrinti ar 2'os užduoties kintamasis yra lyginis skaičius.
// 11) Patikrinti ar 2'os užduoties kintamasis yra nelyginis skaičius.

if (kintamasis2 % 2 === 0) {
    console.log("Skaičius yra lyginis");
} else {
    console.log("Skaičius yra nelyginis");
}

// 12) Patikrinti ar 2'os užduoties kintamasis yra sveikasis skaičius.

function arTeigiamas(kintamasis2) {
    return Number.isInteger(kintamasis2) && kintamasis2 > 0;
}
console.log(arTeigiamas(kintamasis2));

// 13) Parašyti funkciją, kuri pateiktų informaciją ar jai paduotas number kintamasis yra: lyginis/nelyginis skaičius. Pvz.: (uzd13(5) => nelyginis);

function task13(skaicius) {
    if (skaicius % 2 === 0) {
        return "Lyginis";
    } else {
        return "nelyginis";
    }
}
console.log(task13(2));

// 14) Iš 3'čios užduoties masyvo išvesti tik ilgesnius nei 5 simbolių žodžius.

let ilgiZodziai = stringuMasyvas.filter(e => e.length>5);

console.log(ilgiZodziai);

// 15) Iš 3'čios užduoties masyvo išvesti tik trumpesnius nei 8 simbolių žodžius.

let trumpiZodziai = stringuMasyvas.filter(e => e.length<8);

console.log(trumpiZodziai);

// 16+) Parašyti funkciją, kuri iš 3'čios užduoties masyvo išvestų tik kiekvieno žodžio pirmąsias raides.

function task16(stringuMasyvas) {
    return stringuMasyvas.map( e => e[0]);
}
console.log(task16(stringuMasyvas));

// 17+) Parašyti funkciją, kuri iš 3'čios užduoties masyvo išvestų tik kiekvieno žodžio paskutiniąsias raides.

function task17(stringuMasyvas) {
    return stringuMasyvas.map( e => e[e.length-1]);
}
console.log(task17(stringuMasyvas));

// 18++) Parašyti funkciją, kuri iš jai pateikto masyvo išvestų tik tuos žodžius, kurie yra ilgesni negu A, bet trumpesni negu B. Pvz.:(funkcija uzd18(masyvas, a, b) => uzd18(["Labas", "ate", "Katašunis"], 4, 8) => "Labas")
function filterWords(words, minLength, maxLength) {
    return words.filter(word => word.length > minLength && word.length < maxLength);
  }
const words = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];
console.log(filterWords(words, 2, 5)); 


//19) Sudėti visus 4'tos užduoties masyvo kintamuosius ir sumą išvesti į konsolę.
 
let sum = 0;
skaiciuMasyvas.forEach(number => sum += number);
console.log(sum);

//20) Sudėti kas antrą 4'tos užduoties masyvo kintamąjį ir sumą išvesti į konsolę.
sum2 = 0;
for (let i = 0; i < skaiciuMasyvas.length; i += 2) {
  sum2 += skaiciuMasyvas[i];
}

console.log(sum2);

//21+) Parašyti funkciją, kuriai padavus 4'tos užduoties masyvą, jinai sudėtų kas kažkelintą (nurodyti funkcijai) kintamąjį ir išvestų sumą į konsolę.

function sumEveryNth(skaiciuMasyvas, n) {
    let sum3 = 0;
  
    for (let i = n - 1; i < skaiciuMasyvas.length; i += n) {
       sum3 += skaiciuMasyvas[i];
    }
  
    console.log(sum3);
  }

//22++) Parašyti funkciją, kuriai padavus 4'tos užduoties masyvą, jinai sudėtų kas kažkelintą (nurodyti funkcijai) kintamąjį tik tada, jeigu tas kintamasis yra lyginis arba nelyginis (nurodyti funkcijai) ir išvestų sumą į konsolę. Pvz.:(funk([1,2,3,4,5,6,7,8], 3, false) => 3)
function sumEveryNth2(skaiciuMasyvas, n, even) {
    let sum4 = 0;
  
    for (let i = n - 1; i < skaiciuMasyvas.length; i += n) {
      if (even && skaiciuMasyvas[i] % 2 === 0) {
        sum4 += skaiciuMasyvas[i];
      } else if (!even && skaiciuMasyvas[i] % 2 !== 0) {
        sum4 += skaiciuMasyvas[i];
      }
    }
  
    console.log(sum4);
  }
//23) Iš 5'tos užduoties masyvo atrinkite skaičius į vieną masyvą, o string'us į kitą.

tusciasSkaiciuMasyvas = [];
tusciasStringuMasyvas = [];
for (i=0; i<stringIrSkaiciuMasyvas.length; i++){
    if (typeof stringIrSkaiciuMasyvas[i] === 'string'){
        tusciasStringuMasyvas.push(stringIrSkaiciuMasyvas[i]);
    } else if (typeof stringIrSkaiciuMasyvas[i] === 'number') {
        tusciasSkaiciuMasyvas.push(stringIrSkaiciuMasyvas[i]);
    }
}

console.log('Naujas skaisciu:' + tusciasSkaiciuMasyvas);
console.log('Naujas stringu:' + tusciasStringuMasyvas);




