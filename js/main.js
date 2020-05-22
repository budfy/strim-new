/** @format */

function errorHandler() {
	alert("mozfullscreenerror");
}
document.documentElement.addEventListener(
	"mozfullscreenerror",
	errorHandler,
	false,
);

// toggle full screen
function toggleFullScreen() {
	if (
		!document.fullscreenElement && // alternative standard method
		!document.mozFullScreenElement &&
		!document.webkitFullscreenElement
	) {
		// current working methods
		if (document.documentElement.requestFullscreen) {
			document.documentElement.requestFullscreen();
		} else if (document.documentElement.mozRequestFullScreen) {
			document.documentElement.mozRequestFullScreen();
		} else if (document.documentElement.webkitRequestFullscreen) {
			document.documentElement.webkitRequestFullscreen(
				Element.ALLOW_KEYBOARD_INPUT,
			);
		}
	} else {
		if (document.cancelFullScreen) {
			document.cancelFullScreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		}
	}
}

$(document).ready(function () {
	$(window).on("load", function () {
		$(".popup-overlay").fadeIn(250);
	});

	$(".full-btn").click(function () {
		toggleFullScreen();
		$(".popup-overlay").fadeOut(500);
	});

	function calcSize() {
		let heightStart = $(
				".container-info-about-strim-video .wrapper-wideo-players",
			).height(),
			widthStart = $(
				".container-info-about-strim-video .wrapper-wideo-players",
			).width();
		if (heightStart < (widthStart / 16) * 9) {
			widthResult = (heightStart / 9) * 16;
			heightResult = heightStart;
		} else {
			widthResult = widthStart;
			heightResult = (widthStart / 16) * 9;
		}
		$(".js-resize-video").height(heightResult).width(widthResult);
	}

	function setParentSize(setupSize) {
		let setupWidth = setupSize.width(),
			setupHeight = setupSize.height(),
			top = Math.round((setupWidth - setupHeight + 15) / 2);
		$(setupSize).children(".container-afisha").width(setupHeight);
		$(setupSize).children(".container-afisha").height(setupWidth);
		$(setupSize)
			.children(".container-afisha")
			.children(".afisha-list")
			.width(setupWidth);
		$(setupSize)
			.children(".container-afisha")
			.children(".afisha-list")
			.height(setupHeight - 15)
			.css("top", top);
	}

	$(window).resize(function () {
		if (window.matchMedia("(min-width: 767px)").matches) {
			setParentSize($(".wrapper-list-afisha"));
			setParentSize($(".wrapper-list-afisha-tickets"));
		}
		calcSize();
	});

	$(window).on("orientationchange", function (event) {
		setTimeout(calcSize, 300);
	});

	$(".burger__menu").click(function () {
		$(this).toggleClass("burger__menu--open");
		$(".menu-left").toggleClass("menu-left--open");
	});

	$(".item-link-menu").click(function () {
		$(".burger__menu").removeClass("burger__menu--open");
		$(".menu-left").removeClass("menu-left--open");
	});

	$(".title-pay-option").on("change keyup input", function () {
		if (this.innerText) {
			$(this).addClass("after-grivna");

			console.log("gfgh");
		} else {
			$(this).removeClass("after-grivna");
		}

		if (this.innerText.match(/[^0-9]/g)) {
			this.innerText = this.innerText.replace(/[^0-9]/g, "");
		}
	});

	$(".cvv-card, .how-much, .add-new-info").bind(
		"change keyup input",
		function () {
			if (this.value.match(/[^0-9]/g)) {
				this.value = this.value.replace(/[^0-9]/g, "");
			}
		},
	);

	pickerFixed1 = new Picker({
		parent: document.querySelector("#example"),
		alpha: true,
		popup: false,
		//editor: false,
		editorFormat: "rgb",
		color: "#CCFF00",
		onChange: function (color) {
			document.querySelector(".progress-line").style.backgroundColor =
				color.rgbaString;
		},
	});
	pickerFixed1.setColor("#CCFF00", true);

	pickerFixed = new Picker({
		parent: document.querySelector("#example1"),
		alpha: true,
		popup: false,
		//editor: false,
		editorFormat: "rgb",
		color: "#ffffff",
		onChange: function (color) {
			$(".color-progress-text").css("color", color.rgbaString);
		},
	});
	pickerFixed.setColor("black", true);

	$(".title-progress").on("click", function () {
		setTimeout(() => {
			$(".bg-progress-bar").fadeToggle(500);
		}, 500);
		setTimeout(() => {
			$(".color-back-bg").fadeToggle(500);
		}, 500);
	});

	// /*---------------------------маска на ввод---------------*/

	$("#txtCardNumber").mask("9999 9999 9999 9999");

	$("#txtCardNumber1").mask("9999 9999 9999 9999");

	$("#card1").mask("9999 9999 9999 9999");

	$("#card2").mask("9999 9999 9999 9999");

	$("#phone1").mask("(999) 999-9999");

	$("#dataCard").mask("99/99");

	$("#dataCard1").mask("99/99");

	$("#data4").mask("99.99.99");

	$("#data").mask("99.99.99");

	$("#data14").mask("99.99.99");

	$("#time3").mask("99:99");

	$("#time14").mask("99:99");

	$("#time4").mask("99:99");

	$("#time").mask("99:99");

	/*---------------------------клик начать трансляцию---------------*/

	$(".start-translation-btn").on("click", function () {
		$(".start-translation-btn").addClass("disabled-btn");
		$(".plan-translation").addClass("active-plan-block");
	});
	$(".btn-question").on("click", function () {
		$(this).addClass("active-variant");
		$(".plan-translation").removeClass("active-plan-block");
	});
	$(".btn-no").on("click", function () {
		$(".start-translation-btn").removeClass("disabled-btn");
	});

	/*---------------------------клик настройки трансляции---------------*/

	$(".edit-price-input").on("focus", function () {
		$(".edit-price-input").addClass("active-satus-price");
		$(".container-checkbox-wrapper").addClass("active-sell");
		$(".free-price").removeClass("active-satus-price");
	});
	$(".free-price").on("click", function (event) {
		event.preventDefault();
		$(".edit-price-input").removeClass("active-satus-price");
		$(".container-checkbox-wrapper").removeClass("active-sell");
		$(this).addClass("active-satus-price");
	});

	$(".close-doore-link").on("click", function (event) {
		event.preventDefault();
		$(this).addClass("active-status-link");
		$(".private-link").removeClass("active-status-link");
		$(".open-doore-link").removeClass("active-status-link");
		$(".login-close-translation").addClass("active-login-close");
	});

	$(".open-doore-link").on("click", function (event) {
		event.preventDefault();
		$(this).addClass("active-status-link");
		$(".close-doore-link").removeClass("active-status-link");
		$(".private-link").removeClass("active-status-link");
		$(".login-close-translation").removeClass("active-login-close");
	});

	$(".private-link").on("click", function (event) {
		event.preventDefault();
		$(this).addClass("active-status-link");
		$(".open-doore-link").removeClass("active-status-link");
		$(".close-doore-link").removeClass("active-status-link");
		$(".login-close-translation").addClass("active-login-close");
	});

	$(".donuts-input").change(function () {
		$(".material-goal").toggleClass("active-material");
		$(".container-checkbox-wrapper").toggleClass("active-checkbox-height");
	});

	/*-------------------------регистрация  и вход-------------------*/

	$(".registration-title").on("click", function (event) {
		event.preventDefault();
		$(this).addClass("active-title-block");
		$(".sign-in-title").removeClass("active-title-block");
		$(".wrapper-sign-content").addClass("none-active-sign-form");
		$(".wrapper-loged").addClass("active-registration-form");
		$(".wrapper-loged").removeClass("active-error-height");
		$(".wrapper-error-login").removeClass("active-wrapper-error");
		$(".wrapper-loged").removeClass("active-error");
		$(".instruction-block").removeClass("active-error-instruction");
	});
	$(".sign-in-title").on("click", function (event) {
		event.preventDefault();
		$(this).addClass("active-title-block");
		$(".registration-title").removeClass("active-title-block");
		$(".wrapper-loged").removeClass("active-registration-form");
		$(".wrapper-sign-content").removeClass("none-active-sign-form");
		// $(this)
		// 	.closest(".container-stream")
		// 	.find(".wrapper-about-frame")
		// 	.toggleClass("active-small-height");
	});

	$(".conditions-btn").on("click", function (event) {
		event.preventDefault();
		$(this).addClass("active-btn-conditions");
		$(".autorization").addClass("active-block-conditions");
	});
	$(".close-conditions").on("click", function () {
		$(".conditions-btn").removeClass("active-btn-conditions");
		$(".autorization").removeClass("active-block-conditions");
	});

	$(".number-email").on("focus", function () {
		$(".email-input").addClass("active-border");
		$(".password-input-wrapper").removeClass("active-border");
		$(".name-input-wrapper").removeClass("active-border");
		$(".nickname-wrapper").removeClass("active-border");
		$(".sername-input-wrapper").removeClass("active-border");
	});
	$(".password").on("focus", function () {
		$(".password-input-wrapper").addClass("active-border");
		$(".email-input").removeClass("active-border");
		$(".name-input-wrapper").removeClass("active-border");
		$(".nickname-wrapper").removeClass("active-border");
		$(".sername-input-wrapper").removeClass("active-border");
	});
	$(".name-input").on("focus", function () {
		$(".name-input-wrapper").addClass("active-border");
		$(".nickname-wrapper").removeClass("active-border");
		$(".email-input").removeClass("active-border");
		$(".password-input-wrapper").removeClass("active-border");
		$(".sername-input-wrapper").removeClass("active-border");
	});
	$(".nickname").on("focus", function () {
		$(".nickname-wrapper").addClass("active-border");
		$(".name-input-wrapper").removeClass("active-border");
		$(".email-input").removeClass("active-border");
		$(".password-input-wrapper").removeClass("active-border");
		$(".sername-input-wrapper").removeClass("active-border");
	});
	$(".sername-input").on("focus", function () {
		$(".sername-input-wrapper").addClass("active-border");
		$(".nickname-wrapper").removeClass("active-border");
		$(".name-input-wrapper").removeClass("active-border");
		$(".email-input").removeClass("active-border");
		$(".password-input-wrapper").removeClass("active-border");
	});

	$(".sign-in-btn").on("click", function () {
		$(".wrapper-loged").addClass("active-error-height");
		$(".wrapper-error-login").addClass("active-wrapper-error");
		$(".wrapper-loged").addClass("active-error");
		$(this).prop("disabled", true);
	});

	$(".restore-password-btn").on("click", function (event) {
		event.preventDefault();
		$(".wrapper-loged").removeClass("active-error");
		$(".instruction-block").addClass("active-error-instruction");
	});

	/*-------------------------добавить карту-------------------*/

	$(".add-payment").on("click", function () {
		$(".container-payment").addClass("activeCard");
		$(".wrapper-card").addClass("card-active");
	});
	$(".close-card-btn").on("click", function () {
		$(".wrapper-card").removeClass("card-active");
		$(".container-payment").removeClass("activeCard");
	});

	/*-------------------------блок пожертвования-------------------*/

	$(".donut-btn").on("click", function () {
		$(".chat-wrapper").toggleClass("active-pay-donut");
		const windowWidth = $(window).width();
		if (windowWidth <= 768) {
			$(".active-pay-donut").addClass("scroll-pane");
		}
	});

	$(".container-emodgi").on("click", function (e) {
		$(".container-emodgi").removeClass("active-emodgi");
		$(this).addClass("active-emodgi");
	});

	$(".close-donute-pay").on("click", function () {
		const windowWidth = $(window).width();
		if (windowWidth <= 768) {
			$(".active-pay-donut").removeClass("scroll-pane");
		}
		$(".chat-wrapper").removeClass("active-pay-donut");
	});

	$(".donate-btn").on("click", function () {
		$(".container-donate-btn").addClass("active-error-donute");
	});

	/*-------------------------два окна стрима-------------------*/

	$(".add-new-video-strimer").on("click", function () {
		$(".wrapper-wideo-players").toggleClass("active-new-vindow");
		setTimeout(calcSize, 300);
	});

	$(".count").on("click", function () {
		$(this).toggleClass("active-count");
	});

	$(".strim-complaitn").on("click", function () {
		$(".container-title-strim-footer").addClass("active-violations");
	});
	$(".close-violations").on("click", function () {
		$(".container-title-strim-footer").removeClass("active-violations");
	});

	/*-------------------------выбор разрешения видео---------------*/
	$(".resolution-munu-item").on("click", function () {
		$(this).siblings().removeClass("current");
		$(this).addClass("current");
		$(".current-resolution").text($(this).text());
	});

	/*-------------------------регулировка звука--------------------*/
	$("#volume").on("input", function () {
		$(".volume-icon>i").removeClass();
		let vol = $(this).val();
		if (vol > 50) {
			$(".volume-icon>i").removeClass();
			$(".volume-icon>i").addClass("fas fa-volume-up");
		}
		if (vol > 0 && vol <= 50) {
			$(".volume-icon>i").removeClass();
			$(".volume-icon>i").addClass("fas fa-volume-down");
		}
		if ((vol = 0)) {
			$(".volume-icon>i").removeClass();
			$(".volume-icon>i").addClass("fas fa-volume-mute");
		}
	});

	/*-------------------------страница вопросов-------------------*/

	$(".title-name-chater-container").on("click", function (event) {
		event.preventDefault();
		$(this).parent().find(".sub-list-chat").slideToggle();
	});
	$(".item-sub-title").on("click", function (event) {
		event.preventDefault();
		$(".item-sub-title a").removeClass("active-link");
		$(this).find("a").addClass("active-link");
		$(".content-chat-question").removeClass("none-question");
	});
	$(".answer-btn").on("click", function () {
		$(".new-message-input-wrapper").addClass("add-citate");
	});

	$(".copy-btn").on("click", function () {
		$(".active-redactor").addClass("add-notification");
	});
	setTimeout(function () {
		$(".active-redactor").removeClass("add-notification");
	}, 5000);

	$(".delete-btn").on("click", function () {
		$(".active-redactor").addClass("active-delete-question");
	});

	$(".delete-notification-message button").on("click", function () {
		$(this).parent().find("button").removeClass("active-status-link");
		$(this).addClass("active-status-link");
	});

	$(".yes-delete").click(function () {
		$(this).closest(".item-question").slideToggle();
	});
	$(".no-delete").click(function () {
		$(".active-redactor").removeClass("active-delete-question");
	});

	/*-------------------------страница уведомления-------------------*/

	$(".choice-no").click(function (event) {
		event.preventDefault();
		$(this).closest(".notifications-item").slideToggle();
	});
	$(".choice-no-pay").click(function (event) {
		event.preventDefault();
		$(this).closest(".notifications-item").slideToggle();
	});

	$(".choice-yes").click(function (event) {
		event.preventDefault();
		$(this).closest(".wrapper-btn-choice").addClass("opacity-block");
		setTimeout(function () {
			$(".wrapper-btn-choice.opacity-block").fadeOut();
		}, 1000);
		setTimeout(() => {
			$(this).closest(".choice-block").find(".block-answer-buy").fadeIn(1000);
		}, 2000);
	});

	$(".choice-pay").click(function (event) {
		event.preventDefault();
		$(this).closest(".wrapper-btn-choice").addClass("opacity-block");
		setTimeout(function () {
			$(".wrapper-btn-choice.opacity-block").fadeOut();
		}, 1000);
		setTimeout(() => {
			$(this).closest(".choice-block").find(".active-broadcast").slideToggle();
		}, 1500);
	});

	$(".btn-answer-no").click(function (event) {
		event.preventDefault();
		$(this).closest(".notifications-item").slideToggle();
	});
	$(".btn-answer-yes").click(function (event) {
		event.preventDefault();
		setTimeout(() => {
			$(this).closest(".choice-block").find(".active-broadcast").slideToggle();
		}, 1000);
		setTimeout(() => {
			$(this).closest(".choice-block").find(".block-answer-buy").fadeIn(1000);
		}, 1500);
	});

	$(".close-broadcast-active").on("click", function () {
		console.log("dfdsf");
		console.log($(this).closest(".active-broadcast"));
		$(this).closest(".active-broadcast").slideUp(500);
	});

	/*-------------------------страница рассписание-------------------*/
	$(".choice-status a").click(function (event) {
		event.preventDefault();
		$(".choice-status a").removeClass("active-satus");
		$(this).addClass("active-satus");
	});

	$(".choice-status-pay").click(function (event) {
		event.preventDefault();
		$(".choice-status-pay").removeClass("active-satus-price");
		$(this).addClass("active-satus-price");
	});
	$(".close-status-link").click(function () {
		$(this)
			.closest(".header-afisha")
			.find(".wrapper-nick")
			.removeClass("active-nicks");
		$(this)
			.closest(".header-afisha")
			.find(".wrapper-nick")
			.addClass("active-nick");
	});
	$(".private-status-link").click(function () {
		$(this)
			.closest(".header-afisha")
			.find(".wrapper-nick")
			.removeClass("active-nick");
		$(this)
			.closest(".header-afisha")
			.find(".wrapper-nick")
			.addClass("active-nicks");
	});
	$(".open-status-link").click(function () {
		$(this)
			.closest(".header-afisha")
			.find(".wrapper-nick")
			.removeClass("active-nick");
		$(this)
			.closest(".header-afisha")
			.find(".wrapper-nick")
			.removeClass("active-nicks");
	});

	$(".edit-price-input").on("focus", function () {
		$(this).addClass("active-satus-price");
		$(this)
			.closest(".list-info-translation")
			.find(".free-status-price")
			.removeClass("active-satus-price");
		$(this).closest(".list-item").addClass("scroll-auto");
	});
	$(".price-translation").on("click", function () {
		$(this)
			.closest(".list-info-translation")
			.find(".edit-time-end")
			.slideDown();
	});
	$(".free-status-price").on("click", function (event) {
		event.preventDefault();
		$(this).addClass("active-satus-price");
		$(this).closest(".list-info-translation").find(".edit-time-end").slideUp();
	});

	$(".delete-btn-list").click(function () {
		$(this).closest(".footer-item-translation").addClass("active-questions");
	});
	$(".settings-btn").click(function () {
		$(this)
			.closest(".footer-item-translation")
			.addClass("active-questions-setting");
	});

	$(".yes-delete-item").click(function (event) {
		event.preventDefault();
		let item = $(this).closest(".list-item");

		item.addClass("removing");

		setTimeout(() => {
			item.remove();
		}, 300);
	});

	$(".yes-setting-item").click(function (event) {
		event.preventDefault();
		$(this)
			.closest(".container-list-item")
			.find(".header-afisha")
			.addClass("fade-header-afisha");
		$(this)
			.closest(".container-list-item")
			.find(".fade-header-afisha")
			.fadeOut(500);

		setTimeout(() => {
			$(this)
				.closest(".container-list-item")
				.find(".setting-afisha")
				.fadeIn(500);
		}, 500);

		$(this)
			.closest(".container-list-item")
			.find(".footer-item-translation")
			.addClass("toggle-out");
		$(this)
			.closest(".container-list-item")
			.find(".public-footer")
			.addClass("active-publick-footer");
		$(this)
			.closest(".container-list-item")
			.find(".block-time-translation")
			.fadeOut(500);
	});

	$(".close-public-change").on("click", function () {
		$(this)
			.closest(".container-list-item")
			.find(".header-afisha")
			.removeClass("fade-header-afisha");
		$(this).closest(".container-list-item").find(".header-afisha").fadeIn(500);
		$(this).closest(".container-list-item").find(".setting-afisha").slideUp();
		$(this)
			.closest(".container-list-item")
			.find(".block-time-translation")
			.fadeIn(500);
	});

	$(".non-stop-buy-ticket").on("click", function (event) {
		event.preventDefault();
		// $(this).addClass('active-non-stop');
	});

	/*-------------------------страница билеты-------------------*/

	$(".cashback-btn").on("click", function (event) {
		event.preventDefault();
		$(this).closest(".footer-item-translation").addClass("active-cash-back");
	});

	$(".no-transfer").on("click", function (event) {
		event.preventDefault();
		$(this).closest(".footer-item-translation").removeClass("active-cash-back");
	});

	$(".forgotten-btn").on("click", function (event) {
		event.preventDefault();
		$(this).closest(".footer-item-translation").addClass("active-cash-back");
	});

	$(".no-transfer").on("click", function (event) {
		event.preventDefault();
		$(this).closest(".footer-item-translation").removeClass("active-cash-back");
	});

	$(".public-btn").on("click", function () {
		$(this).closest(".your-mark").slideToggle();
	});

	/*-------------------------страница финансы-------------------*/
	$(".payment a").click(function (event) {
		event.preventDefault();
		$(".payment a").removeClass("active-pay-option");
		$(this).addClass("active-pay-option");
	});
	$(".add-payment-btn").on("click", function () {
		$(this).fadeOut("fast");
		$(this).closest(".card-payment").find(".add-pay-new-info").slideToggle();
	});

	$(".add-new-payment").on("click", function () {
		$(this).closest(".card-payment").find(".add-pay-new-info").slideToggle();
		$(".add-payment-btn").fadeIn();
	});

	$(".close-new-info").on("click", function () {
		$(this).closest(".add-pay-new-info").slideUp(500);
		$(this).closest(".card-payment").find(".add-payment-btn").slideDown(500);
	});

	/*-------------------------страница о фрейме-------------------*/

	$(".redactor-video").on("click", function () {
		$(this)
			.closest(".wrapper-stream-video")
			.find(".container-video-strim")
			.addClass("opacity-video");
		$(this)
			.closest(".wrapper-stream-video")
			.find(".container-setting-video-strim")
			.fadeIn(500);
		$(this).fadeOut(500);
	});

	$(".save-edit-change").on("click", function () {
		$(this)
			.closest(".wrapper-stream-video")
			.find(".container-video-strim")
			.removeClass("opacity-video");
		$(this)
			.closest(".wrapper-stream-video")
			.find(".container-setting-video-strim")
			.fadeOut(500);
		$(".redactor-video").fadeIn(500);
	});

	$(".edit-social").on("click", function () {
		$(this).closest(".wrapper-social-edit-btn").fadeOut();
		setTimeout(() => {
			$(this).closest(".social-item").find(".adress-link-input").fadeIn(500);
		}, 500);
	});

	$(".close-link").on("click", function () {
		setTimeout(() => {
			$(this)
				.closest(".social-item")
				.find(".wrapper-social-edit-btn")
				.fadeIn(500);
		}, 500);
		$(this).closest(".social-item").find(".adress-link-input").fadeOut(500);
	});

	$(".title-change-password").on("click", function () {
		$(this)
			.closest(".container-change-password")
			.find(".form-change-password")
			.slideToggle();
	});

	$(".save-change-password").on("click", function (event) {
		event.preventDefault();
		$(this)
			.closest(".container-change-password")
			.find(".form-change-password")
			.slideToggle();
	});

	$(".cancel-change-password").on("click", function (event) {
		event.preventDefault();
		$(this)
			.closest(".container-change-password")
			.find(".form-change-password")
			.slideToggle();
	});

	$(".pay-card").on("focus", function () {
		$(this).closest(".wrapper-border-input").addClass("active-border-focus");
	});
	$(".name-acount").on("focus", function () {
		$(this).closest(".title-acount").find(".save-title").fadeIn();
	});
	$(".save-title").on("click", function () {
		$(".error-title-name").slideToggle();
	});
	$(".name-acount").on("change", function () {
		$(".error-title-name").fadeOut();
	});

	$(".close-block").on("click", function () {
		$(this).closest(".warning-block").removeClass("active-arning");
	});

	$(".edit-text-frame").on("click", function () {
		$(this)
			.closest(".bottom-block-about-frame")
			.find("textarea")
			.prop("disabled", false);
	});

	/*-------------------------смена страниц на главной-------------------*/

	$(".search-input").on("focus", function (event) {
		event.preventDefault();
		$(this).closest(".search-container").find(".btn-search").fadeOut();
		$(this)
			.closest(".container-stream")
			.find(".wrapper-stream-content-about")
			.addClass("active-strim-search");
		$(this)
			.closest(".container-stream")
			.find(".wrapper-stream-content")
			.addClass("none-active-strim-content");
		$(".search-close").addClass("search-close-active");
		setTimeout(() => {
			$(".active-strim-search").fadeIn(500);
		}, 1000);
	});

	$(".search-close").click(function () {
		$(".active-strim-search").fadeOut(500);
		$(".search-container").find(".btn-search").fadeIn();
		setTimeout(() => {
			$(this)
				.closest(".container-stream")
				.find(".wrapper-stream-content-about")
				.removeClass("active-strim-search");
			$(this)
				.closest(".container-stream")
				.find(".wrapper-stream-content")
				.removeClass("none-active-strim-content");
			$(".search-close").removeClass("search-close-active");
		}, 500);
	});

	$(".item-stream").on("click", function () {
		if ($(".wrapper-stream-content").hasClass("active-frame-height")) {
			$(".active-frame").slideUp(500);
			$(this)
				.closest(".content")
				.find(".wrapper-about-frame")
				.removeClass("active-frame");
			$(this)
				.closest(".content")
				.find(".wrapper-stream-content")
				.removeClass("active-frame-height");
			console.log("item-stream if");
		} else {
			$(this)
				.closest(".content")
				.find(".wrapper-about-frame")
				.addClass("active-frame");
			$(".active-frame").slideDown(500);
			$(this)
				.closest(".content")
				.find(".wrapper-stream-content")
				.addClass("active-frame-height");
			console.log("item-stream else");
			setTimeout(calcSize, 300);
		}
	});

	$(".header-sign-btn").on("click", function (event) {
		event.preventDefault();
		$(this)
			.closest(".container-stream")
			.find(".autorization-frame")
			.slideToggle(500);
		$(".wrapper-about-frame").toggleClass("active-small-height");
		setTimeout(calcSize, 300);
		console.log("header-sign-btn");
		$(".wrapper-stream-content").toggleClass("active-small-height");
		setTimeout(calcSize, 300);
		console.log("header-sign-btn");
	});

	$(".start-translation").on("click", function (event) {
		event.preventDefault();
		$(this)
			.closest(".container-stream")
			.find(".wrapper-start-translation")
			.slideToggle(500);
	});

	$(".sign-in-frame").on("click", function () {
		$(this).closest(".wrapper-frame-container").addClass("active-frame-btn");
	});

	$(".frame").on("click", function (event) {
		event.preventDefault();
		$(this)
			.closest(".container-stream")
			.find(".wrapper-frame-content")
			.slideToggle(500);
		$(this)
			.closest(".container-stream")
			.find(".wrapper-about-frame")
			.toggleClass("active-small-height");
		$(this)
			.closest(".container-stream")
			.find(".wrapper-stream-content")
			.toggleClass("active-frame-height");
		setTimeout(calcSize, 300);
		console.log("frame");
	});

	$(".notifications-link").on("click", function () {
		$(this)
			.closest(".about-frame")
			.find(".big-center-info")
			.addClass("active-notifications");
		$(this)
			.closest(".about-frame")
			.find(".big-center-info")
			.removeClass("active-schedule");
		$(this)
			.closest(".about-frame")
			.find(".big-center-info")
			.removeClass("active-message-block");
		$(this)
			.closest(".about-frame")
			.find(".big-center-info")
			.removeClass("active-tickets");
		$(this)
			.closest(".about-frame")
			.find(".big-center-info")
			.removeClass("active-finance");
		$(this)
			.closest(".about-frame")
			.find(".big-center-info")
			.removeClass("active-frame-list");
		$(this).closest(".about-frame").find(".active-game-list").slideUp();
		$(".wrapper-left-chat-list").slideUp();
	});

	$(".message-link").on("click", function () {
		$(this)
			.closest(".about-frame")
			.find(".big-center-info")
			.addClass("active-message-block");
		$(this)
			.closest(".about-frame")
			.find(".big-center-info")
			.removeClass("active-notifications");
		$(this)
			.closest(".about-frame")
			.find(".big-center-info")
			.removeClass("active-schedule");
		$(this)
			.closest(".about-frame")
			.find(".big-center-info")
			.removeClass("active-tickets");
		$(this)
			.closest(".about-frame")
			.find(".big-center-info")
			.removeClass("active-finance");
		$(this)
			.closest(".about-frame")
			.find(".big-center-info")
			.removeClass("active-frame-list");
		$(this).closest(".about-frame").find(".active-game-list").slideUp();
		$(".wrapper-left-chat-list").slideToggle();
	});

	$(".schedule-link").on("click", function () {
		$(this)
			.closest(".about-frame")
			.find(".big-center-info")
			.addClass("active-schedule");
		$(this)
			.closest(".about-frame")
			.find(".big-center-info")
			.removeClass("active-notifications");
		$(this)
			.closest(".about-frame")
			.find(".big-center-info")
			.removeClass("active-message-block");
		$(this)
			.closest(".about-frame")
			.find(".big-center-info")
			.removeClass("active-tickets");
		$(this)
			.closest(".about-frame")
			.find(".big-center-info")
			.removeClass("active-finance");
		$(this)
			.closest(".about-frame")
			.find(".big-center-info")
			.removeClass("active-frame-list");
		$(this).closest(".about-frame").find(".active-game-list").slideUp();
		$(".wrapper-left-chat-list").slideUp();
		if (window.matchMedia("(min-width: 767px)").matches) {
			setParentSize($(".wrapper-list-afisha"));
		}
	});

	$(".tickets-link").on("click", function () {
		$(this)
			.closest(".about-frame")
			.find(".big-center-info")
			.addClass("active-tickets");
		$(this)
			.closest(".about-frame")
			.find(".big-center-info")
			.removeClass("active-schedule");
		$(this)
			.closest(".about-frame")
			.find(".big-center-info")
			.removeClass("active-notifications");
		$(this)
			.closest(".about-frame")
			.find(".big-center-info")
			.removeClass("active-message-block");
		$(this)
			.closest(".about-frame")
			.find(".big-center-info")
			.removeClass("active-finance");
		$(this)
			.closest(".about-frame")
			.find(".big-center-info")
			.removeClass("active-frame-list");
		$(this).closest(".about-frame").find(".active-game-list").slideUp();
		$(".wrapper-left-chat-list").slideUp();
		if (window.matchMedia("(min-width: 767px)").matches) {
			setParentSize($(".wrapper-list-afisha-tickets"));
		}
	});

	$(".finance-link").on("click", function () {
		$(this)
			.closest(".about-frame")
			.find(".big-center-info")
			.addClass("active-finance");
		$(this)
			.closest(".about-frame")
			.find(".big-center-info")
			.removeClass("active-tickets");
		$(this)
			.closest(".about-frame")
			.find(".big-center-info")
			.removeClass("active-schedule");
		$(this)
			.closest(".about-frame")
			.find(".big-center-info")
			.removeClass("active-notifications");
		$(this)
			.closest(".about-frame")
			.find(".big-center-info")
			.removeClass("active-message-block");
		$(this)
			.closest(".about-frame")
			.find(".big-center-info")
			.removeClass("active-frame-list");
		$(this).closest(".about-frame").find(".active-game-list").slideUp();
		$(".wrapper-left-chat-list").slideUp();
	});
	$(".about-frame-link").on("click", function () {
		$(this)
			.closest(".about-frame")
			.find(".big-center-info")
			.addClass("active-frame-list");
		$(this)
			.closest(".about-frame")
			.find(".big-center-info")
			.removeClass("active-finance");
		$(this)
			.closest(".about-frame")
			.find(".big-center-info")
			.removeClass("active-tickets");
		$(this)
			.closest(".about-frame")
			.find(".big-center-info")
			.removeClass("active-schedule");
		$(this)
			.closest(".about-frame")
			.find(".big-center-info")
			.removeClass("active-notifications");
		$(this)
			.closest(".about-frame")
			.find(".big-center-info")
			.removeClass("active-message-block");
		$(this).closest(".about-frame").find(".active-game-list").slideUp();
		$(".wrapper-left-chat-list").slideUp();
	});

	$(".setting-stream").on("click", function () {
		$(this).toggleClass("active-btn-setting");
		$(this)
			.closest(".wrapper-frame-content")
			.find(".item-link-menu")
			.removeClass("active-link");
		$(this)
			.closest(".wrapper-frame-content")
			.find(".wrapper-setting-game")
			.addClass("active-game-list");

		$(this)
			.closest(".wrapper-frame-content")
			.find(".active-game-list")
			.slideToggle(500, function () {
				if ($(this).is(":visible")) $(this).css("display", "flex");
			});
	});

	$(".item-link-menu").on("click", function (event) {
		event.preventDefault();
		$(this)
			.closest(".menu-left")
			.find(".item-link-menu")
			.removeClass("active-link");
		$(this).addClass("active-link");
		$(this)
			.closest(".wrapper-frame-content")
			.find(".setting-stream")
			.removeClass("active-btn-setting");
		console.log("Menu changed");
	});

	$(".rules").on("click", function (event) {
		event.preventDefault();
		$(this)
			.closest(".container-stream")
			.find(".regulations-block")
			.slideToggle(500);
	});
	$(".close-text-block").on("click", function () {
		$(".regulations-block").slideToggle(500);
	});

	$(".title-name-chater h3").on("click", function (event) {
		event.preventDefault();
		$(".title-name-chater h3").removeClass("active-green-title");
		$(this).addClass("active-green-title");
	});

	$(".item-info-variant").on("click", function () {
		$(this).siblings().addClass("disabled-variant");
		$(this).removeClass("disabled-variant");
		$(".disabled-variant input").prop("disabled", true);
		$(this).find("input").prop("disabled", false);
	});

	$(".pay-ticket").on("click", function () {
		$(this)
			.closest(".footer-item-translation")
			.find(".payment-tikets")
			.slideToggle(800);
	});

	$(".participate").on("click", function () {
		$(this)
			.closest(".footer-item-translation")
			.find(".time-broadcast-tikets")
			.slideToggle(800);
	});

	/*----------------------scroll  в чате с анимациями доната---------------*/

	$(".makeMeScrollable").smoothDivScroll({
		mousewheelScrolling: "allDirections",
		manualContinuousScrolling: false,
		touchScrolling: true,
	});

	$("#scroller").smoothDivScroll({
		autoScrollingMode: "always",
		autoScrollingDirection: "endlessloopbottom",
		autoScrollingStep: 1,
		autoScrollingInterval: 100,
	});

	$(".and-translation-item").click(function () {
		$(".scroll-pane").scroll();
	});
	$.fn.hScroll = function (options) {
		function scroll(obj, e) {
			var evt = e.originalEvent;
			var direction = evt.detail ? evt.detail * -120 : evt.wheelDelta;

			if (direction > 0) {
				direction = $(obj).scrollLeft() - 120;
			} else {
				direction = $(obj).scrollLeft() + 120;
			}

			$(obj).scrollLeft(direction);

			e.preventDefault();
		}

		$(this).width($(this).find("div").width());

		$(this).bind("DOMMouseScroll mousewheel", function (e) {
			scroll(this, e);
		});
	};

	$(".smile-wrapper").hScroll();

	$("[contenteditable]").focusout(function () {
		var element = $(this);
		if (!element.text().trim().length) {
			element.empty();
		}
	});

	// ---------------------- переключатели языка -----------------------

	$(".lang-btn").on("click", function () {
		$(".language").toggleClass("language-active");
		$(".list-language").fadeTo(500, 0.7);
	});

	$(".link-lang").on("click", function (e) {
		var lang = $(this).attr("data-lang");
		event.preventDefault();
		$(".list-language")
			.fadeTo(500, 0)
			.find(".active-link-item")
			.removeClass("active-link-item");
		$(this).parent().addClass("active-link-item");
		$(".language").removeClass("language-active");
		$(".lang-btn img").attr("src", "image/lang/" + lang + ".svg");
		$(".lang-name").html(lang);
	});

	$(".language-overlay").on("click", function () {
		$(".list-language").fadeTo(500, 0);
		$(".language").removeClass("language-active");
	});
});