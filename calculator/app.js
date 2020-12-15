var expression = '';

console.log(expression);
function press(num){
console.log('dentro de funcion'+ expression);
 console.log(num);
 expression += num;
 document.getElementById('entry').value = expression;
}

console.log(expression);
function equal(){
console.log('dentro de equal'+ expression);
 document.getElementById('entry').value = eval(expression);
 expression = '';
}
console.log(expression);

function erase(){
	expression = '';
	document.getElementById('entry').value = expression;
}

