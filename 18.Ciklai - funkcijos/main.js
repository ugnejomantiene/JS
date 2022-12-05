//          Ciklai
/*
        do while    bet viena syki butu paleistas ciklas
        for of      suka cikla per masyva
        for in      suka cikla per objekta

        array iteration methods

*/ 
// do while
{
    let i = 1;
    // while(i<10){
    //     console.log('veiksmai');
    //     i++;
    // }
    do{
    console.log('veiksmai');
    i++;
    } while(i>10);
}
// for in
{
    let objektas = {a:1, b:2, c:3, d:4, e:5};
    for(let raktas in objektas){
        console.log(raktas, objektas[raktas]);
    }
}
// for of
{
    let masyvas = [5,8,9,4,1,false, false, 46,1,5,4];
    // for(let i=0; i < masyvas.length; i++) {
    //     console.log(masyvas[i]);
    // }
    for(let element of masyvas){
        typeof(element) === 'number' ? console.log(element): null;
    }

}
// forEach
{
    let masyvas = [5,8,9,4,1,false, false, 46,1,5,4];
    masyvas.forEach(element => typeof(element) === 'number' ? console.log(element): null);
    ;

}


//                  Funkcijos
/*
    Funkcija - kazkokia veiksmu seka, kuri yra vykdoma tik tuomet, kai i ta funkcija yra kreipiamasi.

    Parametrai/argumentai - duomenys, perduodami funkcijai jos iskvietimo metu, kuriais funcijos viduje bus atliekami veiksmai.
    Return - funkcija gali kazka grazinti. Funkcijos veiksmai vyksta iki tokl, kol pasiekiamas return.
 */
function hello(vardas){
    console.log('Hello' + vardas);
}

function sudetis(nr1, nr2){
    return nr1 + nr2; //arba let atsakymas = nr1 + nr2 // return atsakymas;
    // uz return console.log neivyks
}

function atimtis(nr1, nr2) {
    let atsakymas = nr1 - nr2;
    return atsakymas;
}
{
function kiekStringuMasyve(array){
    let kiek= 0;
    for(let i=0; i < array.length; i++){
        if (typeof(array[i]) ===  "string"){
            kiek++;
        }
    }
}
}

//          Masyvu metodai
/*
    push()      -prideda prie masyvo galo, modifikuoja
    pop()       - isima is masyvo galo, modifikuoja
    shift()     - isima is masyvo pradzios, modifikuoja
    unshift()   - prideda prie pradzios, modifikuoja
    ________________
    reverse() - apsuka masyva, modifikuoja
    slice(1,2) - paima nuo 1 iki 2 masyvo elementus, nemodifikuoja
    splice(1, 2, 3, 4, 5....) - nuo 1 trina 2 kieki elementu, ir toje vietoje iterpia 3,4,5 elementus, modifikuoja.
    arr1.concat(arr2, arr3, arr4) -  prie array1 prijungia arr2, arr3, arr4..., nemodifikuoja
    sort()      - isrikiuoja masyva abeceles tvarka:
            *
 */
let masyvas = [1,2,3,4,5,6,7,8,9,];
let gabaliukas = masyvas.slice(3,6);
let iskirptas = masyvas[3];
masyvas.splice(3,1 , 9 , 7 );
let sujungtas = masyvas.concat(['labsa', 'Šla', 'aĄs', 'Ču'], [false, 0 ,99, 125487548, 'null']);

// sujungtas.sort(function(a,b){return a-b});
let zodziuMasyvas = ['lesalas', 'labas', 'ąs', 'naujas', 'ūsas', "žiūrovas"];
zodziuMasyvas.sort();