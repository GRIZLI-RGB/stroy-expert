const swiper = new Swiper(".swiper", {
	loop: true,
	navigation: {
		nextEl: ".swiper__buttons-button--right",
		prevEl: ".swiper__buttons-button--left",
	},
    slidesPerView: 4,
    spaceBetween: 18
});
