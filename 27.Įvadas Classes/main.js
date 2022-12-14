//                  KLASĖS

/* 
    Klasė - objektų kūrimo šablonas
    Klasė privalo būti aprašyta, prieš į ją kreipiantis
    Klasių pavadinimai rašomi iš didžiųjų raidžių

*/
/* syntax
    class KlasesPav {
        construktor(par1,par2){
            this.par1 = par1;
            this.par2 =par2;
        }
    }methods... 
*/

// kuriame objektu masyva be klasiu
let asmenysBeKlasiu = [
    {
        vardas: "Ugne",
        amzius: 24,
        istekejus: true
    },{
        vardas: "Ina",
        amzius: 30,
        istekejus: true
    },
];
// kuriame objektu masyva su klasemis
    // class Asmuo{
    //     constructor(a, b, c){
    //         this.vardas = a;
    //         this.amzius = b;
    //         this.istekejus = c;

    //     }
    //     pasisveikinimasSu(vardas){
    //         return this.vardas + " pasisveikina su " + vardas;

    //     }
    // }
    // let asmenysSuKlasemis = new Asmuo("Vardas", 12, false);
    // console.log(asmenysSuKlasemis);
// console.log(asmenysSuKlasemis[0].pasisveikinimasSu("Jonu"));



  
  
  
//Pvz
class Ledai {
    constructor(pavadinimas, skonis, kaina){
        this.skonis = skonis;
        this.pavadinimas = pavadinimas;
        this.kaina = kaina;
    }
    kainosKeitimas(keitimasProcentais){ //neigiamas procentas kaina mazinama
        return this.kaina + this.kaina * keitimasProcentais/100;
    }
  }  

  const leduMasyvas = [
    new Ledai("Dadu", "karamelinis", 1.2),
    new Ledai("Tirpukas", "avietinis", 0.49),
    new Ledai("Nykštukas", "Vanilinis", 1.5)

  ];

  console.log(leduMasyvas);

  {
console.groupCollapsed('Ledų pavadinimai');
    leduMasyvas.forEach(ledas => console.log(ledas.pavadinimas)); // isves tik pavadinimus
console.groupEnd();


console.groupCollapsed('Ledų skoniai');
    leduMasyvas.forEach(ledas => console.log(ledas.skonis)); // isves tik skoni
console.groupEnd();


console.groupCollapsed('Ledų kainos');
  leduMasyvas.forEach(ledas => console.log(ledas.kaina.toFixed(2))); //isves tik kaina
console.groupEnd();

console.groupCollapsed('Ledų kainos su 37% nuolaida');
  leduMasyvas.forEach(ledas => console.log(ledas.kainosKeitimas(-37).toFixed(2))); //isves tik kaina
console.groupEnd();

  }
//Užduotys

//1
{
console.groupCollapsed('1')

class Car { //Sukuriu klasę
    constructor(name, year) { //Sukuriu parametrus
        this.name = name; 
        this.year = year;
        this.helloCar = `${this.name} mašina buvo sukurta ${this.year} metais`
    }
    age(){
        let dabartis = new Date();
        dabartis = dabartis.getFullYear();
        return dabartis - this.year;
    }
}
let apieMasina = new Car("BMW", 2020);
console.log(apieMasina);

console.groupEnd();
}

console.groupCollapsed('2')

// 3

class Rectangle {
  constructor(width, height){
    this.width = width;
    this.height = height;
    this.color = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`; // kiekviena rgb dalis generuojama random
  }
  area (){
    let plotas = this.width* this.height;
    return plotas;
  }
  perimeter (){
    let perimetras =  this.width*2 + this.height*2;
    return perimetras;
  }
}
let staciakampiai =[
  new Rectangle(5,10),
  new Rectangle(2,8),
  new Rectangle(3,8)
];

staciakampiai.forEach(staciakampis => console.log(staciakampis.area()));

staciakampiai.forEach(staciakampis => console.log(staciakampis.perimeter()));

console.groupEnd();

//          TASK 3

console.groupCollapsed('3');

class Point {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  coordinates(){
    return `(${this.x}, ${this.y})`;
  }
  distance(taskas){
    return `Atstumas tarp  taškų yra: ${Math.hypot(this.x-taskas.x,this.y-taskas.y)}`;
  }
}
let taskas1 = new Point (2,2);
let taskas2 = new Point (5,9);
let taskas3 = new Point (2,1);
let taskas4 = new Point (1,2);
let taskas5 = new Point (1,21);
console.log(taskas1.distance(taskas2));
console.log(taskas3.distance(taskas5)); // susKaičiuoja atstumą nuo taško iki kito taško

console.groupEnd();


//          TASK 4

console.groupCollapsed('4');

  class Rectangle_3D{
    constructor(width, height, depth){
      this.width = width;
      this.height = height;
      this.depth = depth;
    }
    volume(){
      let turis = this.width*this.height*this.depth;
      return turis;
    }
    surfaceArea(){
      let pavirsiausPlotas = 2*((this.width*this.height)+(this.width*this.depth)+(this.height*this.depth));
      return pavirsiausPlotas;
    }
    perimeter(){
      let perimetras = 4*(this.width+this.height+this.depth);
      return perimetras;
    }
  }
    let kvadratas = new Rectangle_3D(8,3,4);

  // Isvedam sukurtus metodus
    console.log(kvadratas.volume());
    console.log(kvadratas.surfaceArea());
    console.log(kvadratas.perimeter());

console.groupEnd();



