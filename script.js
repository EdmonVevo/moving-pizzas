
$(document).ready(()=>{
	
	 let mouseLeftPosition = 1;
	 let lastMousePosition = 0;

	 $(document).mousemove(function(e){

	 	let pizza1 = $('.pizza1').css('left');
	 	let pizza1left = +pizza1.replace('px','');

 		let pizza2 = $('.pizza2').css('left');
	 	let pizza2left = +pizza2.replace('px','');

 		let pizza3 = $('.pizza3').css('left');
	 	let pizza3left = +pizza3.replace('px','');

		let pizza4 = $('.pizza4').css('left');
	 	let pizza4left = +pizza4.replace('px','');

	 	let currentPosition = e.pageX;


	 	if(currentPosition < lastMousePosition) {
	 		pizza1left += 10;
	 		pizza2left += 20;
	 		pizza3left += 5;
	 		pizza4left += 14;
	 	}
	 	if(currentPosition > lastMousePosition) {
	 		pizza1left -= 10;
	 		pizza2left -= 20;
	 		pizza3left -= 5;
	 		pizza4left -= 14;
	 	}

	 	lastMousePosition = currentPosition;

	 	$('.pizza1').css({
	 		'left':pizza1left + 'px'
	 	})
	 	$('.pizza2').css({
	 		'left':pizza2left + 'px'
	 	})
	 	$('.pizza3').css({
	 		'left':pizza3left + 'px'
	 	})
	 	$('.pizza4').css({
	 		'left':pizza4left + 'px'
	 	})


	 })
})