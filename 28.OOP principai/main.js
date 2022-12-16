/*Youtube kanalai:
  Mosh - https://www.youtube.com/@programmingwithmosh (gera info)
  TraversyMedia - https://www.youtube.com/@TraversyMedia (gera info)
  Net Ninja - https://www.youtube.com/@NetNinja (geri tutorials)
  WebDev - https://www.youtube.com/@WebDevSimplified (ne tik JS)
  FreeCodeCamp - https://www.youtube.com/@freecodecamp (apie labai daug ką)
  DaveGray - https://www.youtube.com/@DaveGrayTeachesCode ()
  DevDreamer - https://www.youtube.com/@DevDreamer ( trumpi video - nesunku dėmesį išlaikyti)
  CodingTrain - https://www.youtube.com/@TheCodingTrain (sekamos naujienos ir labai faini projektai, minusas - not beginners friendly)
  FireShip - https://www.youtube.com/@Fireship (fun stuff :) )
  CodeBullet - https://www.youtube.com/@CodeBullet (purely for fun)
  KevinPowell - https://www.youtube.com/@KevinPowell (HTML/CSS)
*/


//        OOP Principai
/*
  Inkapsuliacija  - objekto vidiniai duomenys yra slepiami ir jais galima manipuliuoti tik naudojant objekto viešus metodus.
  Abstrakcija     - objekto nepriklausomumas nuo išorinių sudedamųjų dalių.
  Paveldėjimas    - viena klasė gali būti kitos klasės konkretizacija
  Polimorfizmas   - galimybė dirbti su objektu nežinant jo tikslaus tipo ir struktūros
  video: https://youtu.be/pTB0EiLXUC8
*/

class Gyvunas{
    #pavadinimas;
    #kojuKiekis;
    constructor(pavadinimas, kojuKiekis){
      this.#pavadinimas = pavadinimas;
      this.#kojuKiekis = kojuKiekis;
    }
  
    getPavadinimas(){
      return this.#pavadinimas;
    }
    setPavadinimas(naujasPavadinimas){
      this.#pavadinimas = naujasPavadinimas;
    }
  
    getKojuKiekis(){
      return this.#kojuKiekis;
    }
    setKojuKiekis(naujasKojuKiekis){
      this.#kojuKiekis = naujasKojuKiekis;
    }
  
    valgo(){
      return 'Valgo kažką...';
    }
  }
  
  class Kate extends Gyvunas{
    constructor(kojuKiekis){
      super('Katė', kojuKiekis);
    }
  
    #balsoVariantai = ['Miauuu...', 'Psshhhttt...', 'Murk...', 'Rawr...'];
    #balsoVariantas(){
      return this.#balsoVariantai[Math.floor(Math.random()*this.#balsoVariantai.length)];
    }
  
    balsas(){
      return this.#balsoVariantas();
    }
    valgo(){
      return `Valgo kačių maistą, peles...`;
    }
  }
  
  class Voras extends Gyvunas{
    constructor(kojuKiekis){
      super('Voras', kojuKiekis);
    }
  
    gasdina(){
      return "Buuuu MUHAHAHA";
    }
    valgo(){
      return `Valgo muses...`;
    }
  }
  
  let gyvunas = [
    new Gyvunas('Šuo', 4),
    new Kate(4),
    new Voras(8)
  ];

// Susikurti (h1-h6) Antraštės Klasę su tekstu, atributais
class Heading{
  constructor(props){
    this.props = props;
    return this.render();
  }

  render = () =>{
    this.htmlElement = document.createElement(`h${this.props.dydis}`);
    this.textElement = document.createTextNode(this.props.tekstas);   
    this.htmlElement.append(this.textElement);

    if(this.props.atributai){
      // jeigu atributai yra objektas
      Object.keys(this.props.atributai).forEach(raktas => {
        this.htmlElement.setAttribute(raktas, this.props.atributai[raktas]);
      });

      // jeigu atributai yra masyvai masyve
      // this.props.atributai.forEach(atributas => {
      //   this.htmlElement.setAttribute(atributas[0], atributas[1]);
      // });
    }

    return this.htmlElement;
  }
}

let antraste1 = new Heading({
  dydis: '1',
  tekstas: 'Kaimietiškai',
  atributai: {
    class: 'klasesVardas darVienaKlase',
    id: 'kazkoksId',
    style: 'color:red'
  }
  // atributai: [ 
  //   ['class', 'klasesVardas darVienaKlase'],
  //   ['id', 'kazkoksId'],
  //   ['style', 'color:red']
  // ]
});
document.querySelector("body").append(antraste1);
document.querySelector("body").append(new Heading({
  dydis:'5',
  tekstas:'Labas rytas',
  // atributai: [
  //   ['style', 'font-size: 50px']
  // ]
  atributai: {
    style: 'font-size:50px'
  }
}));
document.querySelector("body").append(new Heading({
  dydis:'6',
  tekstas:'mažiukas'
}));
















  // Užduotys

// 1.1

class Zmogeliukas {
    firstName;
    lastName;
  
    constructor(firstName, lastName) {
      this.firstName = this.getFormattedName(firstName);
      this.lastName = this.getFormattedName(lastName);
    }
    getFormattedName(name) {
      if (name.toLowerCase().includes(" ")) {
        const names = name.split(" ");
        const lastName = names[1];
  
        return ` ${lastName[0].toLocaleUpperCase()}${lastName
          .slice(1)
          .toLocaleLowerCase()}`;
      }
      return name[0].toLocaleUpperCase() + name.slice(1).toLocaleLowerCase();
    }
  
    addToTheTable() { //lenteles kurimas
      const usersListElement = document.querySelector("tbody#users-list");
      const nameRow = document.createElement("tr");
      const firstNameElement = document.createElement("td");
      const lastNameElement = document.createElement("td");
      firstNameElement.textContent = this.firstName;
      lastNameElement.textContent = this.lastName;
      nameRow.append(firstNameElement, lastNameElement);
      usersListElement.append(nameRow);
    }
  }
  
  const fullNameEntryForm = document.querySelector("form#fullNameEntry");
  
  fullNameEntryForm.addEventListener("submit", (event) => { // submit veiksmas
    event.preventDefault();
    const fullName = document.querySelector("#fullNameInput").value.trim();
    const firstName = fullName.split(" ")[0]; // isskyrimas
    const otherNames = fullName.slice(firstName.length).trim(); 
    const user = new Zmogeliukas(firstName, otherNames); // sudedam i viena visa info apie person
    user.addToTheTable();
    console.log({ user }); // 
  });

  // 2.
  class Car {
    constructor (brand, model, mileage, price, image) {
      this.brand = brand;
      this.model = model;
      this.mileage = mileage;
      this.price = price;
      this.image = image;
    }
    info() {
      const container = document.querySelector('.container');
      const createDiv = document.createElement('div');
      createDiv.className = '.card';
      const createImage = document.createElement('img');
      createImage.src = this.image;
      const createText = document.createElement('h2');
      createText.innerText = `${this.brand} ${this.model}`;
      createDiv.append(createImage, createText);
      container.append(createDiv);
      createDiv.addEventListener('click', () => {
        alert("Price: " + this.price + " / " + "Mileage: " + this.mileage);
        console.log("Price: " + this.price);
        console.log("Mileage: " + this.mileage);
      })
    }
  }
  
  document.querySelector('#carForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const brand = document.querySelector('#brand').value;
    const model = document.querySelector('#model').value;
    const mileage = document.querySelector('#mileage').value;
    const price = document.querySelector('#price').value;
    const image = document.querySelector('#image').value;
    const car = new Car(brand, model, mileage, price, image);
    car.info();
  })


//5) Sukurti Klasę, kuri kurs paragrafus.

class Paragraph {
  constructor(props) {
    this.props = props;
    return this.render();
  }

  render = () => {
    this.htmlElement = document.createElement('p');
    this.textElement = document.createTextNode(this.props.tekstas);
    this.htmlElement.append(this.textElement);
    if (this.props.atributai) {
      Object.keys(this.props.atributai).forEach(raktas => {
        this.htmlElement.setAttribute(raktas, this.props.atributai[raktas]);
      });
    }
    return this.htmlElement;
  }
}

let paragrafas1 = new Paragraph({
  tekstas:
    "Lorem ipsum dolor sit ame  consectetur adipisicing elit. Quisquam, quod.",
  atributai: {
    class: "klasesVardas darVienaKlase",
    id: "kazkoksId",
    style: "color:green"
  }

});
document.querySelector("body").append(paragrafas1);
document.querySelector("body").append(
  new Paragraph({
    tekstas: "Laba diena",
    atributai: {
      style: "font-size:20px"
    }
  })
);
document.querySelector("body").append(
  new Paragraph({
    tekstas: "Paragrafas"
  })
);