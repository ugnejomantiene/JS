/* 
Number:
  1) Sukurk variable 'milkPrice'. Su JS patikrink ir informuok vartotoją console() ar jam reikės centų, ar nereikės (t.y. ar skaičius sveikas).
  2) Pakoreguok pirmą pratimą, kad console taip pat ir išmestų kainą - su dviem skaičias po kablelio (t.y. 3.00 Eur).
  3) Sukurk programą degalinei - bus du input laukeliai (kuriame su HTML): viename įvedame kainą su trimis skaičias po kablelio, antrame - degalų kiekį, su vienu skaičiu po kablelio (HTML naudojame step="0.1" atributą pasakyti kiek skaičių po kablelio vartotojas gali paduoti). Pavyzdžiui: 1.399Eur x 5.1L. Pateikus duomenis - vartotojui apačioje turi išmesti kainą h1 laukelyje (sukuriame su JS), su dviem skaičiais po kablelio (pvz. 7.13 Eur).
String:
  1) Sukurk du input'us - vieną, kur vartotojas įves savo vardą; kitą - skaičių. Pirma, patikrink ar skaičius sveikas (jei ne - console). Jei sveikas, po apačia sukurk h1 elementą, kur vardas bus atkartotas tiek kartų, kiek skaičius nurodo.
  2) Sukurk input, kur vartotojas įves savo vardą. Įvedus - console'ink kokio ilgio yra vardas. Tačiau užtikrink, kad priekyje ir gale nebūtų įskaičiuoti tarpeliai.
  3) Sukurk input, kur vartotojas įves savo pilną vardą (t.y. vardą ir pavardę). Padaryk, kad JS pridėtų du h1 tag'us, viename - vardas, kitame - pavardė.
  4) Pakoreguok trečią pratimą, kad įskaičiuotų, jei pavardė ilgesnė nei vienas žodis. Jeigu žodžių daugiau negu du, tuomet antrąjį, trečiąjį ir visus likusius išvesti į antrąjį h1 laukelį.

Konspektai:
  1) Pasikonspektuoti VISUS Number metodus ir savybes.
  2) Pasikonspektuoti VISUS Math metodus ir savybes.
  3) Pasikonspektuoti VISUS String metodus ir savybes.

*/

//Numb
console.groupCollapsed(1.1)
//1.1
let milkPrice = 1.99;

if (Number.isInteger(milkPrice)) {
  console.log('Centų neieškok')
}else{
  console.log('Reikės daug centukų')
};
//1.2
console.log('Kaina: ' + milkPrice.toFixed(2));

// //1.3

document.querySelector('#first').addEventListener('submit', (event) => {
    event.preventDefault();
  
    let kaina = Number(document.getElementById('kaina').value);
    let kiekis = Number(document.getElementById('kiekis').value);
  
    let total = kaina * kiekis;
  
    let priceDisplay = document.createElement('h1');
    priceDisplay.textContent = total.toFixed(2);
    document.body.append(priceDisplay);

});
console.groupEnd();

//2.1

document.querySelector('#man').addEventListener('submit', (e) => {
  e.preventDefault();

  let name = document.getElementById('name').value;
  let quant = Number(document.getElementById('quant').value);

  if (Number.isInteger(quant)) {
    const h1 = document.createElement('h1');
    h1.textContent = name.repeat(quant);
    document.body.append(h1);
  } else {
    console.log('Nesveikas skaicius');
  };
});

// //2.2
document.querySelector('#man').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
// Nevakysta istrinti tarpo 
  console.log('Lenght: ' + name.length);
});



//2.3
document.querySelector('#task3').addEventListener(('submit'), (e) => {
  e.preventDefault();
  const pilnasvardas = document.getElementById('pilnasvardas').value.trim().split(' ');

  const vardas = document.createElement('h1');
  vardas.textContent = pilnasvardas[0];

  let pavarde = document.createElement('h1');
  pavarde.textContent = pilnasvardas[1].concat(' ', pilnasvardas[2], ' ', pilnasvardas[3]);

  document.body.append(vardas, pavarde);
});