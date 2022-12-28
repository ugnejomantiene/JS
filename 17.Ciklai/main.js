//          Kintamieji
/*
    Objektas    -   Object      {raktas:reiksme, raktas1:reiksme1...}
    Masyvas     -   Array       [reiksme, reiksme, reiksme...]


    Konteineriniai elementai. Tai reiskia, kad ju viduje galima talpinti kitus kintamuosius.
*/
//          Objektai
{
    console.groupCollapsed('objektai');
let vardas = 'Ugne';
let pavarde = 'Jomantiene';
let amzius = 24;
let vedes = true;


let zmogus = {
    vardas: 'Ugne',
    pavarde: 'Jomantiene',
    amzius: 24,
    vedes: true
};
console.groupEnd;
}

//          Masyvai
{
let menesiai = ["Sausis", 'Vasaris', 'Kovas'];
console.log(menesiai[10]);

let masyvas = [100, true, 'Ugne', [1,2,3,4],'Jomantiene', 5, 8, 0.5];
console.log(masyvas); 

masyvas[1]='pakeistas';
masyvas.push('pushas'); // push - prie masyvo galo prideda reiksme
masyvas.unshift('unshift'); // unshift - prideda reiksme is pradziu
console.log(masyvas);
let masyvoMetoduBandymai = masyvas.pop(); // pop - is masyvo galo issima paskutini duomeni is masyvo
masyvoMetoduBandymai = masyvas.shift(); // shift - isima pirma masyvo elementa
masyvoMetoduBandymai = masyvas.length;   // length - masyvo ilgio duomuo

console.log(masyvas);
console.log(masyvas[0]);
console.log(masyvas[masyvas.length-1]);
}
//      Masyvai ir Objektai
{
    let mixed1 = {
        vardas: 'Ugne',
        amzius: 24,
        pavarde: 'Jomantiene',
        istekejusi: true,
        gyvenamojiVieta: {
            miestas: 'Klaipeda',
            gatve: 'Dragunau'
        },
        pomegiai: ["sportas", 'zaidmai', 'knygos']
    }
    console.log(mixed1.pomegiai.length);
    console.log( "Vinas is " + mixed1.vardas + ' pomegiu yra ' + mixed1.pomegiai[Math.floor(Math.random()*mixed1.pomegiai.length)] + '.');
    console.log(Math.floor(Math.random()*mixed1.pomegiai.length));


    let mixed2 = [
        {
            vardas: 'Ugne',
            amzius: 24
        },
        {
            vardas: 'Andrius',
            amzius: 30
        },
        {
            vardas: 'Pati',
            amzius: 2
        }
     ];
     console.log(mixed2);
}





//          Salygos
/* 
If Else
Switch
Ternary
salyga ? geiguTiesa: jeiguMelas  -  if else
OR / AND - galimas if salygu trumpiniai
*/

if(10>5){
    console.log('tiesa');
} else {
    console.log('melas');
}
10 < 5 ? console.log('tiesa') : console.log('melas');

let number = 100;
if(number > 20){
    console.log('Daug');
} else if(number <=0){
    console.log('-infinity -> 0');
} else {
    console.log('0 -> 20');
}
// number > 20 ? console.log('20 -> infinity');




//----------------------------1------------------------------------------
// 1) Susikurti kintamuosius su reikšmingais pavadinimais ir informacija.
//   1.1) 5 string.
//   1.2) 5 int.
//   1.3) 3 bool.
{
let vardas = 'Ugne';
let pavarde = 'Jomantiene';
let miestas = 'Klaipeda';
let gatve = 'Dragunai';
let gerimas = 'Vanduo'

let metai = 2022;
let menuo = 11;
let diena = 29;
let valanda = 11;
let minute = 20;

let istekejusi = true;
let turiVaiku = false;
let turiuMasina = false;
}


//----------------------------2--------------------------------------------
// 2) Susikurti konteinerius ir juos užpildyti reikšmėmis (bent po 1 kiekvieno tipo).
//   2.1) Masyvas bent 6 ilgio. []
//   2.2) Objektas bent 6 ilgio. {}

//   2.3) Masyvas bent 4 ilgio, kurio viduje būtų kitas masyvas bent 4 ilgio.
//   2.4) Masyvas bent 4 ilgio, kurio viduje būtų objektas bent 4 ilgio.
//   2.5) Objektas bent 4 ilgio, kurio viduje būtų masyvas bent 4 ilgio.
//   2.6) Objektas bent 4 ilgio, kurio viduje būtų objektas bent 4 ilgio.
{
let menesiai = ["Sausis", "Vasaris","Kovas","Balandis","Geguze","Birzelis"];
console.log(menesiai);


console.log(objektas1);

console.log(masyvas2);

let mixed11 = {
    vardas: 'Ugne',
    pavarde: 'Jomantiene',
    amzius: 24,
    vedusi: true,
    seimininke: true,
    butas: 'nuomojamas',
    menesiai: ["Sausis", "Vasaris","Kovas","Balandis"]
}
let objektas2 = {
    vardas: 'Ugne',
    pavarde: 'Jomantiene',
    amzius: 24,
    vedusi: true,
    seimininke: true,
    butas: 'nuomojamas',
    gyvenamojiVieta: {
        miestas: 'Klaipeda',
        salis: 'Lietuva'
    }
}
}
//------------------------------3-----------------------------------
/* 3) Į konsolę išvesti:
  3.1) Bent po 2 reikšmes iš 2.1 ir 2.2 konteinerių.
  3.2) Bent po 3 reikšmes iš 2.3-2.6 konteinerių su bent 1 reikšme esančia konteinerio konteineryje.
  
*/
{
let menesiai = ["Sausis", "Vasaris","Kovas","Balandis","Geguze","Birzelis"];
console.log(menesiai[1]);

}


//          Ciklai
/*
for - naudojamas, kai zinai, kiek kartosis ciklas
______________________
for(iteratorius, salyga(suIteratoriumi) ,iteratoriausKitimas){
    //veiksmai
}
_______________________
while

do while
for in
for of

Ciklai - yra kartojami nurodyti veiksmai, kol yra tenkinama pateikta salyga.

*/

//          for

for(let i=0; i<10; ++i){
    console.log(i);
}



//          While
/*

    while(salyga){
        // veiksmai
    }
*/
   {
   let masyvas = [9,5,4,6,1,2,1,2,3,4,5,6,7,8,9];
   while(masyvas.length){
    console.log(masyvas.shift());
   }
   console.log(masyvas);
    }

//6


//7


//8





