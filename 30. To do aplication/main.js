
//Prisiskiriame kintamuosius

const container = document.querySelector('.container');
let inputValue = document.querySelector('.input');
const add = document.querySelector('.add');

// Storage

if(window.localStorage.getItem("todos") == undefined){
     let todos = [];
     window.localStorage.setItem("todos", JSON.stringify(todos));
}

let todosEX = window.localStorage.getItem("todos");
let todos = JSON.parse(todosEX);



class Item{											// sukuriam klasę
	constructor(name){
		this.createItem(name);
	}
    createItem(name){								// sukūrimas tasko
    	let itemBox = document.createElement('div'); // sukuriam div`ą, į kurį sudėsim item`us
        itemBox.classList.add('item');				// div`ui sukuriam klasę (I guess...)

    	let input = document.createElement('input'); // sukuriam input laukelį
    	input.type = "text";						// nurodome inputo tipą
    	input.disabled = true;						// Kai išjungta ypatybė nustatyta į „true“, įvesties elementas yra 
    	input.value = name;							//išjungtas ir vartotojas negali jo pasirinkti ar suaktyvinti.
    	input.classList.add('item_input');			// inputui pridedame klasę 

		//Pašalinimo mygtuko sukūrimas

    	let remove = document.createElement('button'); // Priskiriame kintająmį mygtukui 
    	remove.classList.add('remove');				//  Mygtukui pridedame klasę
    	remove.innerHTML = "REMOVE";				// Pridedame mygtuko tekstą
    	remove.addEventListener('click', () => this.remove(itemBox, name)); // Pridedame eventą, kuris bus vykdomas paspaudus
					/////////////////// Kas vyks paspaudus mygtuką/////////////////////////
    	container.appendChild(itemBox); 			// Į container įdedame itemBox
        itemBox.appendChild(input);					//Į itemBox įdedame input`ą
		// console.log(input.value);					// Išconsolinam reikšmę, kuri bus įvesta
        itemBox.appendChild(remove);				// Padarome, kad atsirastų REMOVE mygtukas, kai švedame kažką į inputą. 
    }
  
    remove(itemBox, name){							// ištrynimas tasko
        itemBox.parentNode.removeChild(itemBox);	
        let index = todos.indexOf(name);
        todos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }
}

add.addEventListener('click', check);    // tikriname, ar įvestas dalykas yra stringas
window.addEventListener('keydown', (e) => {
	if(e.value == String){
		check();
	}
})
function check(){
	if(inputValue.value != ""){  // sąlyga, kad pridėtų įvestą tekstą, jeigu jis nėra tuščias
		new Item(inputValue.value);
        todos.push(inputValue.value);
        window.localStorage.setItem("todos", JSON.stringify(todos)); // išsaugome
		inputValue.value = "";
	}
}
for (let i = 0 ; i < todos.length ; i++){ 
    new Item(todos[i]);
}


// new Item("Išsimiegoti"); //Pastovūs taskai
// new Item("Išmokti JS");