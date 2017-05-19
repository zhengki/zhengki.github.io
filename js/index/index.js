$(function () {


	init();


	function init() {
		slider();
		loginModal();
	}


	function loginModal() {
		var loginTab = new config.tab({
			container: $(".login-modal-box"),
			titleItem: ".login-modal-title-item",
			contentItem: ".login-modal-content-item"
		});
	}

	function slider() {
		var swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			paginationClickable: true,
			autoplay: 2500,
			loop: true,
			autoplayDisableOnInteraction: false
		});
	}




});