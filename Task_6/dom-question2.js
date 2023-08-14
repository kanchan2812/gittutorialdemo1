//QUERYSELECTORALL
var titles=document.querySelectorAll('.title');
console.log(titles);

titles[1].textContent='Hello';

var item=document.querySelectorAll('.list-group-item');
item[1].style.color='green';

var odd=document.querySelectorAll('li:nth-child(odd)');
var even=document.querySelectorAll('li:nth-child(even)');

for(var i=0; i<odd.length;i++){
    odd[i].style.backgroundColor='green';
    even[i].style.backgroundColor='#f4f4f4';
}