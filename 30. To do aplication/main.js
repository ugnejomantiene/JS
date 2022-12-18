const container = document.querySelector('.container');
let inputValue = document.querySelector('.input');
const add = document.querySelector('.add');

if(window.localStorage.getItem("todos") == undefined){
     let todos = [];
     window.localStorage.setItem("todos", JSON.stringify(todos));
}

let todosEX = window.localStorage.getItem("todos");
let todos = JSON.parse(todosEX);


class Item{
	constructor(name){
		this.createItem(name);
	}
    createItem(name){
    	let itemBox = document.createElement('div');
        itemBox.classList.add('item');

    	let input = document.createElement('input');
    	input.type = "text";
    	input.disabled = true;
    	input.value = name;
    	input.classList.add('item_input');


    	let remove = document.createElement('button');
    	remove.classList.add('remove');
    	remove.innerHTML = "REMOVE";
    	remove.addEventListener('click', () => this.remove(itemBox, name));

    	container.appendChild(itemBox);

        itemBox.appendChild(input);
		console.log(input.value);
        itemBox.appendChild(remove);
    }
  
    remove(itemBox, name){
        itemBox.parentNode.removeChild(itemBox);
        let index = todos.indexOf(name);
        todos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }
}
add.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
	if(e.value == String){
		check();
	}
})
function check(){
	if(inputValue.value != ""){
		new Item(inputValue.value);
        todos.push(inputValue.value);
        window.localStorage.setItem("todos", JSON.stringify(todos));
		inputValue.value = "";
	}
}
for (let i = 0 ; i < todos.length ; i++){
    new Item(todos[i]);
}


new Item("Išsimiegoti");
new Item("Išmokti JS");