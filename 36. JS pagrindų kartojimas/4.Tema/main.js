//1.1) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto skaičių masyvo grąžintų tik tuos skaičius, kurie yra didesni nei A.
function getNumbersGreaterThanA(array, A) {
	// Sukurkite masyvą, kuriame bus laikomos didesnės nei A reikšmės
	const greaterNumbers = [];
  
	// Eikite per visus masyvo elementus
	for (let i = 0; i < array.length; i++) {
	  // Patikrinkite ar ši reikšmė yra didesnė nei A
	  if (array[i] > A) {
		// Jeigu taip, pridėkite šią reikšmę į didesnių nei A reikšmių masyvą
		greaterNumbers.push(array[i]);
	  }
	}
  
	// Grąžinkite didesnių nei A reikšmes
	return greaterNumbers;
  }
  
  // Pavyzdys naudojant funkciją
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const A = 5;
  
  const greaterNumbers = getNumbersGreaterThanA(numbers, A);
  console.log(greaterNumbers);
  // Output: [6, 7, 8, 9]
//1.2) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto skaičių masyvo grąžintų tik tuos skaičius, kurie yra didesni nei A, bet mažesni nei B.
function getNumbersBetweenAandB(array, A, B) {
	// Sukurkite masyvą, kuriame bus laikomos reikšmės tarp A ir B
	const betweenNumbers = [];
  
	// Eikite per visus masyvo elementus
	for (let i = 0; i < array.length; i++) {
	  // Patikrinkite ar ši reikšmė yra tarp A ir B
	  if (array[i] > D && array[i] < B) {
		// Jeigu taip, pridėkite šią reikšmę į reikšmių tarp A ir B masyvą
		betweenNumbers.push(array[i]);
	  }
	}
  
	// Grąžinkite reikšmes tarp A ir B
	return betweenNumbers;
  }
  
  // Pavyzdys naudojant funkciją
  const gers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const D = 3;
  const B = 7;
  
  const betweenNumbers = getNumbersBetweenAandB(numbers, A, B);
  console.log(betweenNumbers);
  // Output: [4, 5, 6]
//1.3) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto skaičių masyvo grąžintų tik tuos skaičius, kurie yra didesni nei A, bet mažesni nei B ir yra lyginiai arba nelyginiai (true/false).
//1.4) Naudodami ką norite (lambda, metodus, kitų funkcijų kvietimus jūsų funkcijose ir pns.) perrašykite 1.1, 1.2 ir 1.3 užduotis.

//2.1) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto string masyvo grąžintų tik tuos žodžius, kurie yra ilgesni negu A.
//2.2) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto string masyvo grąžintų tik tuos žodžius, kurie yra ilgesni negu A, trumpesni negu B.
//2.3) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto string masyvo grąžintų tik tuos žodžius, kurie yra ilgesni negu A, trumpesni negu B ir prasideda didžiąja arba mažąja raidėmis (true/false).
//2.4) Naudodami ką norite (lambda, metodus, kitų funkcijų kvietimus jūsų funkcijose ir pns.) perrašykite 2.1, 2.2 ir 2.3 užduotis.

//3) Parašykite funkciją, kuri iš mišraus masyvo atrinktų tik number arba tik string kintamuosiuos (true/false).
//3.1.1) Jeigu atrinkinėja skaičius, tai juos surikiuoti didėjimo arba mažėjimo tvarka (true/false) ir grąžintų sutvarkytą masyvą.
//3.1.2) Prie 3.1.1 pridėti ir dydžio tikrinimą (ne mažesni negu A ir ne didesni negu B skaičiai (A<skaičius<B)).
//3.2.1) Jeigu atrinkinėja žodžius, tai juos surikiuoti pagal abėcėlę A->Z arba Z->A (true/false) ir grąžintų sutvarkytą masyvą.
//3.2.2) Prie 3.2.1 pridėti ir ilgio tikrinimą (ne trumpesni negu A ir ne ilgesni negu B žodžiai (A<=žodis.length<=B)).
//3 užduoties galutinės versijos funkcijos ir jos kvietimo pvz.: 
	//funkcija vardas(masyvas, numberArString, didejimoArMazejimo, minimum, maximum);
	//let rikiuotas = vardas(masyvas3, true, false, 3, 6) -> kintamajam "rikiuotas" grąžina masyvą, kuris susideda iš masyvas3 buvusių elementų, kurie yra: true - number, false - mažėjimo tvarka, 3 - didesni negu 3, 6 - mažesni negu 6.


