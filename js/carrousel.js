const imagesSlide = [];
let maxImages = 0;
let imageActual = 0;
let time = 0
const $carrousel = document.querySelector('[data-js="slide"]');
const $spiner = document.querySelectorAll('[data-js="spiner"]');	
const $titleCarrousel = document.querySelectorAll('[data-js="title"]');

function modifyCarousel(index){
	if((index === 0) || ($spiner[2].classList.contains('spiner-active'))){
		changeCarouselImages(2, 0)
		changeCarouselTitle(0, 1, 2)
	} else if ((index === 1) || ($spiner[0].classList.contains('spiner-active'))){
		changeCarouselImages(0, 1)
		changeCarouselTitle(1, 0, 2)
	} else if ((index === 2) || ($spiner[1].classList.contains('spiner-active'))){
		changeCarouselImages(1, 2)
		changeCarouselTitle(2, 0, 1)
	}
}

function changeCarouselTitle(classRemove, classPrimary, classSecundary){
	$titleCarrousel[classRemove].classList.remove('remove-title')
	$titleCarrousel[classPrimary].classList.add('remove-title')
	$titleCarrousel[classSecundary].classList.add('remove-title')
}

function changeCarouselImages(indexRemove, indexAdd){
	$spiner[indexRemove].classList.remove('spiner-active');
	$spiner[indexAdd].classList.add('spiner-active');
}

function getImage(directory, amount){
	let imagesNumber = 1;
	for(let cont = 0; cont < amount; cont++){
		imagesSlide[cont] = new Image();
		imagesSlide[cont].src = directory + '-' + imagesNumber + '.jpg';
		imagesNumber++;
	}
}

function applyImageBackground(imageName){
	$carrousel.style.backgroundImage = "url('" + imagesSlide[imageName].src + "')";
	modifyCarousel(imageActual)
}
	
function startSlideAnamtion(imageNumberActual){
	imageActual += imageNumberActual;
	if(imageActual > maxImages) {
		imageActual = 0;
	} else if (imageActual < 0){
		imageActual = maxImages;
	}
	applyImageBackground(imageActual);
}

function nextImage(){
	time++;
	if(time >= 200){
		time = 0;
		startSlideAnamtion(1);
	}
	window.requestAnimationFrame(nextImage);
}

function startSlide(directory, amount){
	getImage(directory, amount);
	maxImages = imagesSlide.length-1;
	applyImageBackground(imageActual);
	nextImage();
}

window.addEventListener('load', function (){
	setInterval(startSlide('img/slide/slide', 3), 200);
});