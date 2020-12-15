function generate(){

	var quotes = {
		"Sthephen Covey": '"The way ..."',
		"Walt Disney": '"The other side ..."',
		"Winston Churchil": '"The pessimist"',
		"Will Rogers": '"Dont let ..."',
		"Vince Lombardi": '"Its not ..."',
		"Unknown": '"You learn"'
	}

	var keys = Object.keys(quotes);
	console.log(keys);
	var author = keys[Math.floor(Math.random() * keys.length)];
	console.log(author);
	var quote = quotes[author];

	document.getElementById('quote').innerHTML = quote;
	document.getElementById('author').innerHTML = author;

}

