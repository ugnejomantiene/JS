//      Užduotys be/ su iteraciniu metodu
{
let zodziuMasyvas = ["labas", "ate", "noriu", "miegoti", "belenkaip noriu miegoti"];
let skaiciuMasyvas = [1,2,3,4,5,10,1111,98, 44444];
let misrusMasyvas = ["labas", "ate", true, "noriu", 1,9, 10, false, "nezinau", "js"];

//1 Parašykite funkciją, kuri Į konsolę išspausdinti masyvo duomenis (atskirose eilutėse)
console.groupCollapsed(1)
let udz1_be = (masyvas) => {
for (let i = 0; i < masyvas.length; i++){
    console.log(masyvas[i]);
    }
}

let uzd1_su = (masyvas) => masyvas.forEach(element => console.log(element));

console.groupEnd();

//2 Parašykite funkciją, kuri grąžintų masyvą, kuriame tik skaičiai, didesni už 10 iš jai pateikto skaiciu masyvo.
console.groupCollapsed(2);
// let uzd2_be = (masyvas) => {
//     let grazinamasMasyvas = [];
//     for(i = 0, i < masyvas.length; i++){
//         if(masyvas[i]>10){
//             grazinamasMasyvas.push(masyvas[i]);
//         }
//     }
//     return grazinamasMasyvas;
// }

let uzd2_su = (masyvas) => {
    masyvas.filter(element => element>10);
}

console.groupEnd();

//3 Parašykite funkciją, kuri patikrintų, ar jai paduotame string masyve bent vienas elementas yra žodis, yra ilgesnis nei 5 raides.
console.groupCollapsed(3);
let uzd3_be = (masyvas) => {
    for(let i=0; i < masyvas.length; i++){
        if(masyvas[i].length > 5){
            return true;
        }
    }
}

let uzd3_su = (masyvas) => masyvas.some(element => element.length > 5);
console.groupEnd();

//4 Parašykite funkciją, kuri jai paduotame misriame masyve, rastų ir grąžintų pirmąjį kintamąjį, kuris yra skaičius.

let uzd4_be = (masyvas) => {
    for(let i=0; i < masyvas.length; i++){
        if(typeof (masyvas[i]) === 'number'){
            return masyvas[i];
        }

    }
}

let uzd4_su = (masyvas) => masyvas.find(element => typeof(element) === 'number');

}
//Savarankiskos uzduotys


//Užduotys

//1   Nusikopijuok array (const cars = ["BMW", "VW", "Audi"]) ir naudojant forEach, atspausdink kiekvieną elementą (automobilio reikšmę).
console.groupCollapsed(1);

const cars = ["BMW", "VW", "Audi"];
let task1 = (cars) => cars.forEach(element => console.log(element.indexOf(cars.length)));
console.log(cars);

console.groupEnd();



//2 Pakoreguok pirmą pratimą, kad atspaudintum index: value (pvz: "0: BMW", "1: VW" ir t.t.).
console.groupCollapsed(2);

const cars2 = ["BMW", "Mersas", "Grabas"];
let  task2 = cars2.map((car, index) => index + ":" +car);
console.log(task2);
console.groupEnd();


//3 Sukurk Array su savo draugų vardais, raidžių kapitalizaciją pamiksuok (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą, padaryk, kad susikurtų naujas array (ir jį atspausdink), kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" => "Petras").

console.groupCollapsed(3);

const vardai = ['Ugne', 'AnDrius', 'LiGITA', 'Ausra', 'inetA'];
const teisingas = vardai.map((vardas) => vardas.charAt().toUpperCase() + vardas.slice(1).toLowerCase());
console.log(teisingas);

console.groupEnd();


//4 Sukurk Array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter - prafiltruok tik tuos skaičius, kurie didesni arba lygūs 18.
console.groupCollapsed(4);
const amzius = [ 1, 9, 47, 32, 56, 16, 13, 41, 52, 4];
const age18 = amzius.filter((number) => number >= 18);
console.log(age18);
console.groupEnd();



// 5 Sukurk Array su Lietuvos miestais ("Vilnius", "Kaunas"). Naudojant find - surask bet kokį pirmą miestą, kuris prasideda iš "K" raidės.

console.groupCollapsed(5);
const miestai = ["Kaunas", "Vilnius", "Klaipeda", "Alytus"];
const ieskome = miestai.find(element => element.charAt("K"));
console.log(ieskome);
console.groupEnd();

//6 Penktame pratime esantį sprendimą pakoreguot ir patikrink su some ar bent vienas miestas prasideda iš mažosios.

console.groupCollapsed(6);
const miestai1 = ["Kaunas", "Vilnius", "klaipeda", "Alytus"];
console.log(miestai1.some(element => element.charAt(0) === element.charAt(0).toLowerCase()));
console.log(miestai1);
console.groupEnd();

// 7 Pakoreguok šeštą pratimą, kad tikrintų ne ar bent vienas miestas prasideda iš mažosios, bet ar visi iš didžiosios.
console.groupCollapsed(7);
const miestai2 = ["Kaunas", "Vilnius", "klaipeda", "Alytus"];
console.log(miestai2.every(element => element.charAt(0)===element.charAt(0).toUpperCase));
console.log(miestai2)
console.groupEnd();



//extra 
/* 
ForEach, Filter, Reduce ir Map:
  1) Susikurti bent 10 ilgio masyvą kaip nurodyta ir tolimesnėse užduotyse naudoti šitą masyvą. ( 1 ilgio pavyzdys: [{id:0, name:"Burgeris", inStock:true, primeCost:0.3, cost:1}]
  2) Naudojant forEach - išvesti masyvą į konsolę.
  3) Naudojant forEach - išvesti tik masyvo vardus ir kainas į konsolę.
  4) Išfiltruoti (for{if{}}) tuos masyvo elementus, kurie yra inStock (inStock yra true) ir išsaugoti prafiltruotą masyvą naujame kintamajame ir jį atvaizduoti konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)).
    4.1) Naudojant map ir 4'tos užduoties masyvą - sukurti naują masyvą, kuriame būtų name ir suskaičiuotas bei išsaugotas profit (cost-primeCost) ir jį atvaizduoti konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)).
    4.2) Susikurti masyvą, kuriame būtų išrašyti masyvo (1'ojo) vardai ir jų kiekiai (sukurti užsakymo masyvą) ir jį atvaizduoti konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)). (galima sukurti kelis užsakymus)
    4.3) Suskaičiuoti kiek pelno suteiks 4.2 masyvo užsakymas ir tai atvaizduoti konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)). (arba užsakymai, jei 4.2 dalyje sukūrėte keletą užsakymų)
    4.4) Naudojant map - padaryti naują masyvą, kuriame būtų atvaizduotas užsakymas (kiek kokių dalykų buvo užsakyta) ir jo kaina (prie kiekvieno dalyko jo kaina(jei buvo keli, tai jų suma) ir pačiame gale bendra kaina) ir jį atvaizduoti konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)). */
    
//1
const meniu = [
    {id:0, name:"Burgeris", inStock:true, primeCost:2, cost:5},
    {id:1, name:"Burgeris_2", inStock:true, primeCost:2, cost:5},
    {id:2, name:"Burgeris_3", inStock:true, primeCost:2, cost:5},
    {id:3, name:"Burgeris_4", inStock:true, primeCost:2, cost:5},
    {id:4, name:"Burgeris_5", inStock:false, primeCost:2, cost:5},
    {id:5, name:"Pzza", inStock:true, primeCost:3, cost:7},
    {id:6, name:"Pizza_2", inStock:true, primeCost:0.3, cost:7},
    {id:7, name:"Pizza_3", inStock:false, primeCost:0.3, cost:7},
    {id:8, name:"Drink", inStock:true, primeCost:0.3, cost:2},
    {id:9, name:"Drink_2", inStock:false, primeCost:0.3, cost:2}
];

//2

let extra2 = (meniu) => meniu.forEach(element =>console.log(element));
console.log(extra2(meniu));


//3

let extra3 = (meniu) => meniu.forEach(element=>console.log(element.name + " : " + element.cost));
console.log(extra3(meniu));

//4


// Destruktūrizavimas

/*
    Destruktūrizavimas - kažkokio elemento išskirstymas dalimis.

    array des... syntax
    const [a,b] = masyvas;  *Priskyrimas paeiliui
    const [a, , b] = masyvas;   * Žingsnio praleidimas
    const [a, , b , ...c] = masyvas;   *Likusių elementų priskyrimas
    const [a="default vaalue", , b , ...c] = masyvas;   *Galima priskirti numatytas reikšmes, kurios bus priskiriamos tokiu atveju, kai destrūkturizuojamame elemente ta reikšmė bus undefined

    object destr... syntax

    let {a,b} = objektas; *Priskyrimas pagal raktinius zodzius
    let {a,b : kitasB} = objektas *Priskiriamo raktinio zodzio pakeitimas
    let {a,b: kitasB, ...kitkas} = objektas *Priskyrimas neparinktu/nepanaudotu elementu.
    let {a,b: kitasB, c= c "default"...kitkas} = objektas *Nerastu raktiniu zodziu default reiksmes nustatymas




    

*/
{
//  arr be destr...
let masyvas = ["zodis", 2 , true,2,5];
let a = masyvas[0];
let b = masyvas[1];

//  arr su destr....
 let [z, x] = masyvas;

//function

 let desrtF = (arg1, arg2, ...args) => {
    console.log(arg1, arg2, args);
 } 
desrtF(1,2,3,4,5,6,7,8,9);

// objektas ne destr...
let objektas = {
    vardas: "Ugne",
    amzius: 24,
    gyvenamojiVieta: {
        salis: "Lietuva",
        miestas: "Klaipeda"
    },
    batai: "zieminiai"
}

// let vardas = objektas.vardas;
// let amzius = objektas.amzius;

let {vardas, amzius:metai, pavarde = "Pavardenis", ...kitkas} = objektas; // istraukia amziu ir pavercia metais
console.log(vardas, metai, pavarde,kitkas); 


}

//Savarankiskos uzduotys 2 dalis
{

//1   Naudodami destructuring priskirkite 2 kintamiesiems 2 reikšmes.

let destrMasyvas = ['meška', 11, 'namai', 'passaulis', true, 14];

let [pirmas, antras] = destrMasyvas;
console.log(pirmas, antras);

//2    Naudodami destructuring priskirkite 10 kintamųjų 10 reikšmių.

let [vie, du, trys, ket, penk, sesi, sept, ast, dev, des] = destrMasyvas;
console.log(vie, du, trys, ket, penk, sesi, sept, ast, dev, des);


//3    Naudodami destructuring priskirkite 3 kintamiesiems 5 reikšmes.


let destrMasyvas2 = [true, 56, 'nu', 'daug', 'lempa'];

let [vien, du1, ...trys1] = destrMasyvas2;
console.log(vien, du1, trys1);

//4  Naudodami destructuring priskirkite 1 kintamajam visas reikšmes išskyrus pirmas 3.


let[ , , , ...labas] = destrMasyvas2;
console.log(labas);

//5    Naudodami destructuring priskirkite 3 kintamiesiems 3 reikšmes paimtas iš objekto.

let object = {
    vardas1: 'Adas',
    amzius1: 22,
    vieta1: 'Klaipeda'
  }

let {vardas1, amzius1, vieta1} = object;
console.log(vardas1, amzius1, vieta1);


//6    Naudodami destructuring sukeiskite 2 kintamųjų reikšmes.

let first = "Pirmas";
  let second = "Antras";
  [first, second] = [second, first];
  
  console.log("first:", first);
  console.log("second:", second);

}