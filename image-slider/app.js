var index = 0;

showSlide(index);


function showSlide(i){

	console.log(`i: ${i}`);

	index += i;
	console.log(`index: ${index}`);

	var slides = document.getElementsByClassName('my_slides');

	for(i = 0; i < slides.length; i++){
		console.log(`i dentro del fr: ${i}`);
		slides[i].style.display = 'none';
	}
       
	console.log(`slides: ${slides}`);

	
	if(index > slides.length - 1)
	{
		console.log(`index denrto del fi > : ${index}`);
		index = 0;
	
	}

	if(index < 0){
		console.log(`index denrto del fi < : ${index}`);
		index = slides.length - 1;
	}


	slides[index].style.display = 'block';

}
