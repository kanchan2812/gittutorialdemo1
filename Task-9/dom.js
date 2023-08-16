var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');
//form submit event
form.addEventListener('submit',addItem);
//Delete event
itemList.addEventListener('click',removeItem);
//filter event
filter.addEventListener('keyUp',filterItems);
//add item
function addItem(e){
e.preventDefault();

//Get input value
var newItem=document.getElementById('item').value;

//create new li elmemt
var li=document.createElement('li');
//Add class
li.className='list-group-item';
//add textNode with input value
li.appendChild(document.createTextNode(newItem));

//create delete button
var deleteBtn =document.createElement('button');
//create a edit button
var editBtn =document.createElement('button');
//add classes to delete button
deleteBtn.className='btn btn-danger btn-sm float-right delete';
//Add classes to edit button
editBtn.className='btn btn-danger btn-sm float-right edit';
//Append text Node
deleteBtn.appendChild(document.createTextNode('X'));
//append text Node
editBtn.appendChild(document.createTextNode('EDIT'));
//Append button to li
li.appendChild(deleteBtn);
li.appendChild(editBtn);

//Append li to list
itemList.appendChild(li);
}


//Remove item
function removeItem(e){
if(e.target.classList.contains('delete')){
if(confirm('Are You Sure?')){
    var li=e.target.parentElement;
    itemList.removeChild(li);
}
}

}


// Filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }