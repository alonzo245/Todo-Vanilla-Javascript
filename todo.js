const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

const addItem = e => {
  e.preventDefault();
  const newItem = document.getElementById('item').value;
  const li = document.createElement('li');
  const deleteBtn = document.createElement('button');
  
  deleteBtn.className = 'btn';
  deleteBtn.appendChild(document.createTextNode('X'));
  
  li.className = 'listGroupItem';
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(deleteBtn);
  itemList.appendChild(li);
}

const removeItem = e => {
      let li = e.target.parentElement;
      itemList.removeChild(li);
}

const filterItems = e =>{
  const text = e.target.value.toLowerCase();
  const items = itemList.getElementsByTagName('li');
  Array.from(items).forEach((item) => {
    let itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}


form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);
