// 1) Parašyti ciklą, kuris išspausdintų kiekvieną masyvo elementą.
let task1 = [10, 2, 'aš', true];
for(let i=0; i<task1.length; ++i){
    console.log(i);
}

// 2) Parašyti ciklą, kuris išspausdintų kas trečią masyvo elementą.
task2 = [1,2,3,4,6,1,1,6,6,6,6,true, true, true]
for (let i = 0; i < task2.length; i += 3) {
    console.log(task2[i]);
  }

// 3) Parašyti funkciją, kuri išspausdintų kas kažkelintą elementą iš jai pateikto masyvo.
let gaidys = [10,10,10,10,10,2,2,2,2,2,2,2,1,1,2,2,2,44444] ;
n = 4;
function printEveryNth(gaidys, n) {
    for (let i = n - 1; i < gaidys.length; i += n) {
      console.log(gaidys[i]);
    }
}
console.log(printEveryNth(gaidys,n));
// 4) Parašyti ciklą, kuris iš masyvo išspausdintų tik elementus, kurių reikšmė didesnė negu 54.
const arr = [1, 55, 23, 67, 34, 78, 11, 50];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 54) {
    console.log(arr[i]);
  }
}

// 5) Parašyti funkciją, kuri iš pateikto masyvo išspausdintų tik elementus, kurie prasideda nurodyta raide.
let sarasas = ['nesamone', 'motociiklas', 'neidomu'];
let letter = 'n';
function printStartingWith(sarasas, letter) {
    for (let i = 0; i < sarasas.length; i++) {
      if (sarasas[i][0] === letter) {
        console.log(sarasas[i]);
      }
    }
}
console.log(printStartingWith(sarasas, letter));

// 6) Parašyti ciklą, kuris surikiuotų masyvą didėjimo tvarka. (tik su string ir tik su numbers (2ciklus)).
const menox = [3, 1, 5, 2, 4];

menox.sort((a, b) => a - b);

console.log(menox);

// 7) Parašyti funkciją, kuri iš masyvo atrinktų tik lyginius skaičius, juos surikiuotų mažėjimo tvarka ir išspausdintų konsolėje.
let step = [1,8,8,8,7,5,6,4,3,1,5,69,8];
function printEvenNumbers(step) {
    const evenNumbers = step.filter(num => num % 2 === 0).sort((a, b) => b - a);
    console.log(evenNumbers);
  }
  console.log(printEvenNumbers(step));