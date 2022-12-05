let renkames1 = document.querySelectorAll("p");
console.dir(renkames1);
console.log(renkames1);

// dir - grąžina interaktyvų savybių sąrašą
// log - grąžina žinutę



//          Eventai
for(let i = 0; i < renkames1.length; i++){
    renkames1[i].addEventListener('click',function(event){
        console.dir(event);
        console.log("paspaudei ant " + i +  " paragrafo")});
}

let renkames2 = document.querySelector("html");
renkames2.addEventListener("keydown", function(event){
    console.dir(event);
    console.log("Paspaudei " + event.key + " mygtuka");
});


let visiH1 = document.querySelectorAll('h1');
for (let i=0; i < visiH1.length; i++){
        console.dir(visiH1[i]);
        visiH1[i].textContent += " :) ";
        visiH1[i].style.color = 'red';
}
   
/* 
1) Pasikonspektuoti Event'us ir DOM.
2) Iš JS'o selektinti elementus 10 naudojant skirtingų selektorių.
3) Išbandyti 5 skirtingus event'ų listener'ius.
4) Uždėti vienodą event'ą, 5'iems vienu metu selektintiems elementams.
*/


//2
let renkames3 = document.querySelector('#event');
console.dir(renkames3);
console.log(renkames3);

let renkames4 = document.querySelector('#DOM');
console.dir(renkames4);
console.log(renkames4);

let renkames5 = document.querySelector('main');
console.dir(renkames5);
console.log(renkames5);

let renkames6 = document.querySelector('#event');
console.dir(renkames6);
console.log(renkames6);

let renkames7 = document.querySelector('section');
console.dir(renkames7);
console.log(renkames7);

let renkames8 = document.querySelector('#main');
console.dir(renkames8);
console.log(renkames8);

let renkames9 = document.querySelector('.last');
console.dir(renkames9);
console.log(renkames9);

let renkames10Visi = document.querySelectorAll('section');
console.dir(renkames10Visi);
console.log(renkames10Visi);

let renkames11Visi = document.querySelectorAll('h5');
console.dir(renkames11Visi);
console.log(renkames11Visi);

let renkames12Visi = document.querySelectorAll('h4');
console.dir(renkames12Visi);
console.log(renkames12Visi);

let renkames13 = document.querySelector('h1');
console.dir(renkames13);
console.log(renkames13);

//3





renkames13.addEventListener("mouseout", function(event){
    console.dir(event);
    console.log("mouseout");
});


renkames9.addEventListener("dblclick", function(event){
    console.dir(event);
    console.log("dblclick");
});

renkames13.addEventListener("mouseover", function(event){

    console.dir(event);
    console.log("mouseover");
});

renkames13.addEventListener("mouseover", function(event){
    console.dir(event);
    console.log("mouseover");
});

renkames6.addEventListener("scroll", function(event){
    console.dir(event);
    console.log("scroll");
});

//5

let daug = document.querySelectorAll('h5, h4');
for (let i=0; i < daug.length; i++){
        console.dir(daug[i]);
        daug[i].textContent += " xxx ";
        daug[i].style.color = 'blue';
}

//          kurti DOM iš JS`o

let DOM_is_JS = document.querySelector('#DOM_is_JS');

DOM_is_JS.textContent += '<p> Labas </p>'; //1budas

let paragrafas = document.createElement('p'); //2 budas
let tekstas = document.createTextNode('Text node');
paragrafas.append(tekstas);
DOM_is_JS.append(paragrafas);
console.log(paragrafas);

//          Dom stilizavimas iš JS

// paragrafas.className = "tekstas"; // 1 budas

//

// paragrafas.setAttribute('class', 'tekstas'); // 2 budas

paragrafas.classList.add('tekstas');  //3 budas (geriausias)
paragrafas.classList.add('kitaKlase');
paragrafas.classList.add('kazkas');

paragrafas.classList.remove('kitaKlase');

