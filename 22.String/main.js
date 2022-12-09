//      Metodai

//      Number/Math
/* 
    Kreipimasis į number metodus prasideda žodzžiu "Math" arba number, po jo rašome "." ir metodo pavadinimą ir skliaustelius su norimais parametrais. Pvz.: Math.random(); (46.12321465453).toFix(3);

    Math - atlieka skaičiavimus, pateikia duomenis.
    number - atlieka pakeitimus, ponvertavimus
*/
console.groupCollapsed();

let number = 50.535435435;
console.log(number.toFixed(4));
console.log(Math.floor(number));
console.log(Math.random() * number);
console.log(number.toString());
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.POSITIVE_INFINITY);
console.log(Math.pow(5,2));
console.log(Math.sqrt(25));
console.log((Math.random() * number).toFixed(2) );
console.log()
console.log()


console.groupEnd();


//          String

/*
String metodai yra įvairios funkcijos, kurios atlieka veiksmus priklausomai nuo metodo, su tuo stringu, reikšmemis, kurios duodamos. Tam tikriems metodams parametrai yra reikalingi, kitiems - ne. 


*/
let zodis = 'Labas';
console.log(zodis.split('')); // sukarpo kiekviena simboli
console.log(zodis[0]); // sukarpo po zodi
console.log(zodis.trim()); //isvalo tarpus
console.log(zodis.includes('s')); //suranda raide
console.log(zodis.replaceAll('.', ',,,')); //pakeis taska kableliu
console.log(zodis.charAt(0));
console.log(zodis.charAt(zodis.length-1)); // parinks paskutinia stringo raide
console.log(zodis.charAt(0));
console.log(zodis.concat(", ", 'labas', zodis));// sudeda stringus, galima iterpti elementus
console.log(zodis.toUpperCase()); // VISAS RAIDES PADARYS DIDŽIOSIOMIS


// RegExp

/* 
 Regular expression - reguliariosios išraiškos - yra nurodytos simbolių sekos, kurias turi atitikti vartotojo vedama informacija.

 \d - digit (skaicius nuo 0 iki 9)
 [0-9] - digit skaicius nuo 0 iki 9
 [a-z] - 
 [A-Z]
 {sk} - kiek kartu kartoti prieš tai nurodytą info
 \sk - tarpas
 ^ - sekos pradžia
 $ - sekos pabaiga
 ..........

*/





