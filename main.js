const ul = document.querySelector('ul');
let items = document.querySelectorAll('li');
let button = document.querySelector('.addButton');
function eventAdd(){
	items = document.querySelectorAll('li');
	items.forEach((item) =>{
		item.addEventListener('click',(e)=>{
			e.target.remove();
		});
	});
}
eventAdd();

function createElement(el,text){
	let element = document.createElement(el);
	element.textContent = text;
	return element;
}

function getValFrom(ref){
	return document.querySelector(ref).value;
}
button.addEventListener('click',()=>{
	ul.prepend(createElement("li",getValFrom('#input')));
	eventAdd();
});