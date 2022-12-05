// console.log("Labas JS");

//      Kintamieji
/*
string          - žodinis kintamasis (žodinė reikšmė) rašomas kabutėse (3 būdai)
number          - skaitinis kintamasis (skaičius)
boolean/bool    - loginis kintamasis (true/false)

nulls           - tuščias
underfined      - neapibrėžtas
NaN             - Not a number

array           - masyvas
object          - objektas

--------------------------------------------------------------------------------------------------------------------------

var/let/const   - kintamųjų ribos
nameOrSmth      - kintamojo vardas
value           - kintamojo reikšmė



*/ 
let manoVardas0 = "Ugne";
let manoVardas1 = 'Ugne';
let manoVardas2 = `Ugne`;

let manoAmzius0 = 26; 
let manoAmzius1 = 26.2;
let manoAmzius2 = 26+0.2;

let vedesIrTuriVaiku = false;
let neVedesIrNeturiVaiku = true;

//------------------------------------------------------------------------------------------------------------------------
let string1 = "Ugne"
let string2 = "Jomantiene"
let string3 = "Klaipeda"
let string4 = "Pirmadienis"
let string5 = "Lapkritis"

let number1 = 1;
let number2 = 2;
let number3 = 3;
let number4 = 4;
let number5 = 10;

let bool1 = true;
let bool2 = false;

//---------------------------
/*      Operatoriai

        Aritmetiniai

+       - sudėtis
-       - atimtis
*       -daugyba
/       -dalyba
**      -kelimas laipsniu
%       -liekanos radimas

        Assignment

=       - lygybė


        Shortcuts

++      -didejimas vienetu (kaskas=kazkas+1)
--      -mazejimas vienetu (kazkas=kazkas-1)
+=      -pridejimas (kazkas=kazkas+kazkiek)
-=      -atemimas (kazkas=kazkas-kazkiek)
*=      -daugyba (kazkas=kazkas*kazkiek)
/=      -dalyba (kazkas=kazkas/kazkiek)
%=      -liekanos (kazkas=kazkas%kazkiek)
**=      -laipsnio kelimas (kazkas=kazkas**kazkiek)


        Palyginimo operatoriai

==      - ar lygus duomenys
===     - ar lygus duomenys ir tipas
>       - daugiau negu
<       - maziau negu
>=      - daugiau arba lygu negu
<=      - maziau arba lygu negu

        Loginiai

!       -ne (apvercia reiksme) NOT
&&      - ir ()     AND
||      - arba      OR

        Type
typeof  - tikrina tipa

---------------------------- */
{
console.log(number1+number2);
console.log(number4-number2);
console.log(number1*number2);
console.log(number5/number2);
console.log(number5**number2);
console.log(number5%number2);
console.log(++number2);
console.log(--number2);

console.log(string1+string2);
console.log(string2-string3);
console.log(string1*string2);
console.log(string4/string2);
console.log(string5**string2);
console.log(string1%string2);
console.log(++string2);
console.log(--string2);


// naudojant matematinius operatorius su bool tipo kintamaisiais, bool yra verciasi i 0 ir 1 . false0 true1
console.log(bool1+bool2);
console.log(bool1-bool2);
console.log(bool1*bool2);
console.log(bool1/bool2);
console.log(bool1**bool1);
console.log(bool1%bool2); //tik sitas negalimas
console.log(++bool1);
console.log(--bool1);

console.log(number1+string2); //tik sitas galimas
console.log(number4-string2);
console.log(number1*string2);
console.log(number5/string3);
console.log(number5**string4);
console.log(number5%string3);
console.log(++number2);
console.log(--number2);
}
{
console.log("++number1", ++number1);
console.log("--number1", --number1);
console.log("+=number2", +-number2);
console.log("number5-=number1", number5-=number1);
console.log("number4*=number3", number4*=number3);
console.log("number4/=number3", number4/=number3);
console.log("number4%=number1", number4%=number1);
console.log("number4**=number3", number4**=number3);
}


// 4 uzduotis
{
console.log(number1==number2);
console.log(number1===number2);
console.log(number1>number2);
console.log(number1<number2);
console.log(number1>=number2);
console.log(number1<=number2);
console.log((number1<=number2)&&(number1<=number3));
console.log((number1<number2)||(number1<number3));
console.log(!(number1<number2));
}


//              Salygos
/*

            If else 


if      - pradine salyga
else if - papildoma salyga, jeigu pirma salyga grazino false


else    - vykdomas, jeigu visos auksciau esancios salygos grazino false


            Nesting

 Salygos viduje rasoma kita salyga


 */
 

let amzius = 15;
if(amzius >= 18) { 
    console.log("Esi pilnametis");
    if(amzius > 90 && amzius < 130){
    console.log("Pensininkas");
    } else if(amzius < 90){
        console.log("Esi darbingas");
    } else {
        console.log("Laikas mirti");
    }
} else if(amzius <= 7) {
    console.log("Pradinukas");
} else {
    console.log("Mokyklinukas")
}

// 5
let turiuTeises = true;
let turiuMasina = true;
let esuBlaivas = false;
if(turiuTeises === true) {
    console.log("Vairuotojo teises yra");
    if(turiuMasina === true && esuBlaivas === true){
        console.log("Vaziuok");
    }else if(turiuMasina === false){
        console.log("Nevaziuok");
    } else {
        console.log("Girtas nevairuok");
    }
} else {
    console.log("Vairuotojo teisiu nera");
}


//          AND ir OR

/* 
Naudojant && tikrinama ar abiejose pusese yra tiesa, jeigu bent vienoje pusejeyra melas, grazina mela. Jeigu kaireje puseje melas, desines net nevykdo.
Naudojant || tikrinama, ar bent vienoje puseje yra tiesa. Jeigu bent vienoje puseje yra tiesa, grazina tiesa. Jeigu kaireje puseje yra tiesa - desineje puseje net netikrina.
*/

if(5 == '5' && typeof('5')==typeof(5)){
    console.log('lygu');
} else {
    console.log('nelygu');
}

if(false || true){
    console.log('tiesa');
} else {
    console.log('melas');
}


//      Truthy ir Falsy
/* 
truthy      - true  | not 0 number | string         | array/masyvas | objektas | funkcija
falsy       - false | 0            | empty string   | undefined     | null      | NaN

*/
if(0){
    console.log('truthy');
} else {
    console.log('falsy');
}



//          Switch
/* */
let megstamiausiaSpalva = 'geltona';
switch(megstamiausiaSpalva){
    case 'geltona':
    case 'raudona':
        console.log('megsti ryskia');
        break;
    case 'melyna':
    case 'ruda':
        console.log('megsti tamsias spalvas');
        break;


}
// // let miestas = prompt('is kurio miesto esate');
// switch(miestas) {
//     case 'kaunas':
//         console.log('Kaunas lietuvos sirdis');
//         break;
//     case 'Vilnius' :
//         console.log('Vilnius lietuvos sostine');
//         break;
//     case 'klaipeda' :
//         console.log('miestas su uostu');
//     default:
//         window.alert('Nera tokio miesto');
// }





// 8 uzduotis
/* 
Padaryti taip, kad puslapis su tavimi pasisveikintu, patikrintu kokiame mieste gyveni ir išvestų su tai susijusią info (pasakytų ką nors gražaus apie tavo miestą(galima tobulinti išskiriant keletą miestų, o ne išvedant tą pačią žinutę apie visus)).
  Naudoti:
    1) let/const - kurti kintamuosius
    2) prompt - gauti tavo info.
    3) alert/console.log - grąžintų atsakymus.
    4) if/elseIf/else - kas be ko...*/

// alert('*** Labas ***');
// let miestas = prompt('Kuriame mieste gyveni?');
// switch(miestas) {
//     case 'Kaune':
//         console.log('Gražus miestas'),
//         alert('Gražus miestas');
//         break;
//     case 'Vilniuje':
//         console.log('WOW!!! Gražiausia Europos sostinė!'),
//         alert('WOW!!! Gražiausia Europos sostinė!');
//         break;
//     case 'Klaipėdoje':
//         console.log('Ar dažnai aplankai jūrą? :)'),
//         alert('Ar dažnai aplankai jūrą? :)');
//         break;
// }
//-------------------------

let miestas = prompt('Kokiame mieste gyveni?'); 
if(miestas === 'Klaipėda') {
    alert('Gyvenu gražiame mieste, Klaipėdoje');
    console.log('Gyvenu Klaipėdoje');
} else if(miestas=== 'Vilnius') {
    alert('Gyvenu Vilniuje');
    console.log('Gyvenu Vilniuje');
} else {
    alert('Gyvenu kitur');
    console.log('Gyvenu kitur');
}






 






// 9 uzduotis

/* 
Parašyti switch'ą, kuris tikrintų koks dabar mėnuo ir grąžintų koks yra metų laikas
  Naudoti:
    1) let/const - kurti kintamuosius.
    2) prompt - gauti mėnesį.
    3) alert/console.log - grąžinti atsakymą.
    4) switch - kas be ko...*/

let mėnuo = prompt('Koks dabar mėnuo?')
switch(mėnuo){
    case 'Gruodis':
    case 'Sausis':
    case 'Vasaris':
    console.log('Žiema');
        break;
    case 'Kovas':
    case 'Balandis':
    case 'Gegužė':
        console.log('Pavasaris');
        break;
    case 'Birželis':
    case 'Liepa':
    case 'Rugpjūtis':
        console.log('Vasara');
        break;
    case 'Rugsėjis':
    case 'Spalis':
    case 'Lapkritis':
        console.log('Ruduo');
        break;
}











// 10 uzduotis

