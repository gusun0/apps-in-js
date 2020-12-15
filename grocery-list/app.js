const input = document.getElementById('one-item');

input.addEventListener('keydown',function (event){
	if(event.key == 'Enter'){
		addItem();
	}
});

function addItem(){
	var item = document.getElementById('one-item').value;
	console.log(item);
	var h1 = document.createElement('h1');
	document.getElementById('one-item').value = '';
	h1.appendChild(document.createTextNode(item));

	h1.addEventListener('click', function (){
		h1.style.textDecoration = 'line-through';	
	});

	var div = document.getElementById('all-items');

	div.insertAdjacentElement('beforeend',h1);


}


function eraseList(){
  var list = document.getElementById('all-items');
  console.log(list);
  var i = 0;
  console.log(i);

  console.log(list.childNodes);
  while(i < list.childNodes.length){
  //console.log(list.childNodes);
  list.removeChild(list.childNodes[0]);
  }

  
}
