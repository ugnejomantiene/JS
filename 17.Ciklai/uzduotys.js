
// 1.1
{
let vardas = 'Ugne';
let pavarde = 'Jomantiene';
let miestas = 'Klaipeda';
let gatve = 'Dragunai';
let gerimas = 'Vanduo'
}
//1.2
{
let metai = 2022;
let menuo = 11;
let diena = 29;
let valanda = 11;
let minute = 20;
}
//1.3
{
let istekejusi = true;
let turiVaiku = false;
let turiuMasina = false;
}
//2.1
{
let menesiai = ["Sausis", "Vasaris","Kovas","Balandis","Geguze","Birzelis"];
}
//2.2
{
 let objektas1 = {
    vardas: 'Ugne',
    pavarde: 'Jomantiene',
    amzius: 24,
    vedusi: true,
    seimininke: true,
    butas: 'nuomojamas'
};   
}
//2.3
{
let masyvas2 = ['Metai', 'Menuo', [1, 2, 3, 4], 'Savaite', 'Minute'];
console.log(masyvas2[2][2]); 
console.log(masyvas2[2],[3]);

}
//2.4
{
let daiktai = ['Puodas', 'Saukstas', {puodelis:'mazas', stalas:'didelis', stiline:'stikline', samtis:'medinis'}, 'peilis'];
}
//2.5
{
let namas = {
    durys: 'baltos',
    langai: 'stiklas',
    grindys: 'juodos',
    augalai:[
        'zydintys',
        'berzai',
        'gervuoges'
    ],
    sofa: 'dviviete'
}
}
//2.6
{
    let namas = {
        durys: 'baltos',
        langai: 'stiklas',
        grindys: 'juodos',
        augalai:{
           kaktusai: 'zydintys',
            medziai:'berzai',
            uogos: 'gervuoges'
        },
        sofa: 'dviviete'
    }
}
//3.1
{
let menesiai = ["Sausis", "Vasaris","Kovas","Balandis","Geguze","Birzelis"];
console.log(menesiai[2]);
console.log(menesiai[3]);
}
{
let kortele = {
    vardas: 'Ugne',
    pavarde: 'Jomantiene',
    amzius: 24,
    vedusi: true,
    seimininke: true,
    butas: 'nuomojamas'
   };
   console.log(kortele.vardas);
   console.log(kortele.butas);
}
//3.2
{
    // prie uzdaviniu
}
//6

    let skaiciuMasyvas = [];
    for(let i = 0; i < 50; i++){
        skaiciuMasyvas.push(Math.floor(Math.random()*101));
    }
    console.log(skaiciuMasyvas);    

//7
{
    for(let i = 0; i < skaiciuMasyvas.length; i+=3){
        console.log(skaiciuMasyvas[1]);
    }
    console.log(skaiciuMasyvas); 
}
//8
{
    for(let i = skaiciuMasyvas.length - 1; i >=0; i-=2){
        console.log(skaiciuMasyvas[i]);
    }
    console.log(skaiciuMasyvas); 
    }
//9
{
        for(let i = 54; i < 100; i++){
            skaiciuMasyvas.push(i);
        }
        console.log(skaiciuMasyvas); 
    }
10//
{
    {
        let skaiciuMasyvas = [];
            for(let i = 0; i < 100; i+=2){
                skaiciuMasyvas.push(i);
            }
            console.log(skaiciuMasyvas); 
        }
    {
        let skaiciuMasyvas = [];
            for(let i = 1; i < 100; i+=2){
                skaiciuMasyvas.push(i);
            }
            console.log(skaiciuMasyvas); 
        }
}
 // extra2
{
for (let i = 1; i <=45; i++)
{
    if (i % 3 == 0 && i % 5 ==0){
        console.log('FizzBuzz');
    } else if (i % 3 == 0) {
        console.log('Fizz');
    } else if(i%5 == 0) {
        console.log('Buzz');
    }
    }
}
//extra 3 
for (let i=1; i <= 100; i++)
{
    if (i % 2 !==0){
        console.log(i);
    }
}
