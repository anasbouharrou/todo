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
	if(getValFrom('#input')===''){
		alert("No Text in Input");
	}
	else{
		ul.prepend(createElement("li",getValFrom('#input')));
		eventAdd();
	}
});
const request = new XMLHttpRequest();

request.addEventListener('readystatechange',()=>{
	console.log(request,request.readyState);
	if(request.readyState === 4){
		addToDocument(request.responseText);
	}
});

function addToDocument(added){
	let div = document.querySelector('div');
	let element = document.createElement("p");
	element.textContent = added;
	div.prepend(element);
}
const request = new XMLHttpRequest();

request.addEventListener('readystatechange',()=>{
	console.log(request,request.readyState);
	if(request.readyState === 4){
		addToDocument(request.responseText);
	}
});
const request = new XMLHttpRequest();

request.addEventListener('readystatechange',()=>{
	console.log(request,request.readyState);
	if(request.readyState === 4){
		addToDocument(request.responseText);
	}
});
const request = new XMLHttpRequest();

request.addEventListener('readystatechange',()=>{
	console.log(request,request.readyState);
	if(request.readyState === 4){
		addToDocument(request.responseText);
	}
});

function addToDocument(added){
	let div = document.querySelector('div');
	let element = document.createElement("p");
	element.textContent = added;
	div.prepend(element);
}

request.open('GET','https://jsonplaceholder.typicode.com/todos');
request.send();
function addToDocument(added){
	let div = document.querySelector('div');
	let element = document.createElement("p");
	element.textContent = added;
	div.prepend(element);
}

request.open('GET','https://jsonplaceholder.typicode.com/todos');
request.send();
function addToDocument(added){
	let div = document.querySelector('div');
	let element = document.createElement("p");
	element.textContent = added;
	div.prepend(element);
}

request.open('GET','https://jsonplaceholder.typicode.com/todos');
request.send();

request.open('GET','https://jsonplaceholder.typicode.com/todos');
request.send();