//traversing the DOM
//PRENTNODE
 //var itemList=document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// //PARENTELEMENT
// var itemList=document.querySelector('#items');
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// //CHILDSNODES
// var itemList=document.querySelector('#items');
// console.log(itemList.childNodes);

//CHILDRENS
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';


// // //firstChild
// // console.log(itemList.firstChild);

// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello 1';

// //lastChild
// console.log(itemList.lastChild);

// //lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='Hello 4';

// //nextSibling
// console.log(itemList.nextSibling);

// //nextSiblingElement
// console.log(itemList.nextElementSibling);

// //previousSibling
// console.log(itemList.previousSibling);

// //previoussiblingelement
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green';


//createElement

//create Div

var newDiv=document.createElement('div');
//add class
newDiv.className='Hello';

//Add id
newDiv.id='hello1';

//add attribute
newDiv.setAttribute('title','Hello div');

//create a textNode
var newDivText=document.createTextNode('Hello World!');
//create a textNode
var newDivText2=document.createTextNode('HEllo World');
//add text to div
newDiv.appendChild(newDivText);
newDiv.appendChild(newDivText2);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

var listGroups=document.querySelector('.list-group');
var li=document.querySelector('li');

newDiv.style.fontSize='30px';
console.log(newDiv);

container.insertBefore(newDiv,h1);
listGroups.insertBefore(newDiv,li);

