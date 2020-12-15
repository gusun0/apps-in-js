function changeColors(){
	colors = ['red','blue','green','orange','yellow'];
	var randomColor = colors[Math.floor(Math.random() * colors.length)];
	document.body.style.backgroundColor =  randomColor;

	r = setTimeout(changeColors,200);
	console.log(r);
}



