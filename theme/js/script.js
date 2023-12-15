/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

$(document).ready(function () {
	'use strict';

	// navbarDropdown
	if ($(window).width() < 992) {
		$('.navigation .dropdown-toggle').on('click', function () {
			$(this).siblings('.dropdown-menu').animate({
				height: 'toggle'
			}, 300);
		});
	}

	$(window).on('scroll', function () {
		//.Scroll to top show/hide
		if ($('#scroll-to-top').length) {
			var scrollToTop = $('#scroll-to-top'),
				scroll = $(window).scrollTop();
			if (scroll >= 200) {
				scrollToTop.fadeIn(200);
			} else {
				scrollToTop.fadeOut(100);
			}
		}
	});
	// scroll-to-top
	if ($('#scroll-to-top').length) {
		$('#scroll-to-top').on('click', function () {
			$('body,html').animate({
				scrollTop: 0
			}, 600);
			return false;
		});
	}

	// Shuffle js filter and masonry
	var containerEl = document.querySelector('.shuffle-wrapper');
	if (containerEl) {
		var Shuffle = window.Shuffle;
		var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
			itemSelector: '.shuffle-item',
			buffer: 1
		});

		jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
			var input = evt.currentTarget;
			if (input.checked) {
				myShuffle.filter(input.value);
			}
		});
	}

	$('.portfolio-single-slider').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000
	});

	$('.clients-logo').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000
	});

	$('.testimonial-slider').slick({
		slidesToShow: 1,
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000
	});


	// CountDown JS
	var countDownEl = $('.count-down');
	if (countDownEl) {
		$('.count-down').syotimer({
			year: 2021,
			month: 5,
			day: 9,
			hour: 20,
			minute: 30
		});
	}

	// Magnific Popup Image
	$('.portfolio-popup').magnificPopup({
		type: 'image',
		removalDelay: 160, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function () {
				// just a hack that adds mfp-anim class to markup
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		closeOnContentClick: true,
		midClick: true,
		fixedContentPos: true,
		fixedBgPos: true
	});

	//  Count Up
	function counter() {
		var oTop;
		if ($('.count').length !== 0) {
			oTop = $('.count').offset().top - window.innerHeight;
		}
		if ($(window).scrollTop() > oTop) {
			$('.count').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				}, {
					duration: 1000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum) + '%');
					},
					complete: function () {
						$this.text(this.countNum + '%');
					}
				});
			});
		}
	}
	$(window).on('scroll', function () {
		counter();
	});

	// ----------------------------------------------------------

	function enableScroll() {
		document.body.classList.remove('modal-open');
	}

	function disableScroll() {
		document.body.classList.add('modal-open');
	}

	let btn = document.querySelector("#showbtn");
	let question = document.querySelector("#showScore");
	let overlay = document.querySelector("#overlay");
	let close = document.querySelector("#close");



	btn.addEventListener("click", function () {
		overlay.style.display = "flex";
	});


	close.addEventListener("click", function () {
		overlay.style.display = "none";
	});

	question.addEventListener("click", function () {
		enableScroll();
	})


	document.getElementById('showbtn').addEventListener('click', function () {
		document.getElementById('modal').style.display = 'block';
		document.body.classList.add('modal-open');
	});


	document.getElementById('close').addEventListener('click', function () {
		document.getElementById('overlay').style.display = 'none';
		document.body.classList.remove('modal-open');
	});


	let showQuestionBtn = document.getElementById('showQuestion');
	let overlayQuestion = document.getElementById('overlayQuestion');

	showQuestionBtn.addEventListener('click', function () {
		overlayQuestion.style.display = 'flex';
		document.body.classList.add('modal-open');
	});


	//  ---------------------------------------------------------------

	let totalScore = 0;
	let currentQuestion = 1;
	const totalQuestions = 8;
	// ---------------------------------------------------------
	const nicknameForm = document.getElementById("nicknameForm");
	const nicknameInput = document.getElementById("nickname");

	let userNickname = "";

	nicknameForm.addEventListener("submit", function (event) {
		event.preventDefault();
		userNickname = nicknameInput.value;
		overlay.style.display = "none";
		quizDiv.style.display = "block";
		overlayQuestion.style.display = 'flex';
		enableScroll();
	});
	// ---------------------------------------------------------
	window.checkAnswer = function (selectedOption) {
		let correctAnswer;

		switch (currentQuestion) {
			case 1:
				correctAnswer = 'B';
				break;
			case 2:
				correctAnswer = 'D';
				break;
			case 3:
				correctAnswer = 'B';
				break;
			case 4:
				correctAnswer = 'D';
				break;
			case 5:
				correctAnswer = 'A';
				break;
			case 6:
				correctAnswer = 'C';
				break;
			case 7:
				correctAnswer = 'D';
				break;
			case 8:
				correctAnswer = 'A';
				break;
			default:
				correctAnswer = '';
		}

		const isCorrect = selectedOption === correctAnswer;

		const answerButtons = document.querySelectorAll('#overlayQuestion #qs .question button');
		answerButtons.forEach(button => {
			// if (isCorrect) {
			// 	button.style.backgroundColor = '#eedccd';
			// } 
			var corrtext = button.innerText.substring(0, 1);
			console.log(`Selected coption text: ${corrtext}`);
			if (corrtext === correctAnswer) {
				console.log(`Correct answer: ${correctAnswer.trim()}`);
				button.style.backgroundColor = isCorrect ? '#eedccd' : '#837f7e';
			} else {
				console.log(`Correct answer2: ${isCorrect}`);
				console.log(`INCorrect answer: ${correctAnswer.trim()}`);
				button.style.backgroundColor = '#655E7A';
			}
			button.disabled = true;
			enableScroll();
		});
		if (isCorrect) {
			totalScore += 10;
		}

		setTimeout(() => {
			if (currentQuestion < totalQuestions) {
				currentQuestion++;
				resetQuestion();
				showNextQuestion();
			} else {
				overlayQuestion.style.display = "none";
				alert(userNickname + " 探險家，恭喜你獲得總分: " + totalScore);
			}
			enableScroll();
		}, 1000);
	}

	function resetQuestion() {
		const answerButtons = document.querySelectorAll('#overlayQuestion #qs .question button');
		answerButtons.forEach(button => {
			button.style.backgroundColor = '';
			button.disabled = false;
		});
		disableScroll();
	}

	const questionTexts = [
		"「舟參」船儀式中要如何選定要用的枝幹？",
		"「舟參」船儀式中選定要用的枝幹後會攜帶什麼顏色的綵帶去作記號？",
		"王船哪個器物是用以照妖辟邪？",
		"慶安宮的特色代表物？",
		"燒王船在王船醮流程中的哪個步驟？",
		"送王中「拍船醮」的意義為何？",
		"「傳說」搶得鯉魚旗的人會如何？",
		"什麼情況下代表「送王」結束？"
	];

	const optionsTexts = [
		['A.看哪個枝幹最大', 'B.擲筊問神明', 'C.看哪個枝幹離廟宇最近', 'D.隨便選'],
		['A.綠色', 'B.白色', 'C.藍色', 'D.紅色'],
		['A.崁巾', 'B.獸面鏡', 'C.銅錢', 'D.龍目'],
		['A.龍', 'B.皮卡丘', 'C.石獅', 'D.鯉魚'],
		['A.送王', 'B.請王', 'C.南巡', 'D.造王船'],
		['A.看王船是否是堅固的', 'B.幫王船拍張照', 'C.為王船開水路', 'D.代表送王結束'],
		['A.會拿到一筆錢', 'B.可以找到另一半', 'C.不會怎樣', 'D.未來三年大發'],
		['A.道長將七星旗丟入火焰中', 'B.拍船醮', 'C.跟王船說掰掰後', 'D.跟王船拍張合照後']
	];

	const newOptionsTexts = [
		['A', 'B', 'C', 'D'],
		['A', 'B', 'C', 'D'],
		['A', 'B', 'C', 'D']
	];


	function showNextQuestion() {
		const questionText = document.querySelector('#overlayQuestion #qs #questionText');
		questionText.innerText = currentQuestion + '. ' + questionTexts[currentQuestion - 1];

		const optionsButtons = document.querySelectorAll('#overlayQuestion #qs .question button');
		optionsButtons.forEach((button, index) => {
			button.innerText = optionsTexts[currentQuestion - 1][index];
			console.log(`Selected option text: ${button.innerText}`);
		});

		const nextQuestionForm = document.querySelector('#overlayQuestion #qs .question');
		nextQuestionForm.id = 'Q' + currentQuestion + 'Form';

		const nextQuestionInput = document.querySelector('#overlayQuestion #qs .question input');
		nextQuestionInput.id = 'Q' + currentQuestion + '_';

		overlayQuestion.style.display = "flex";
		disableScroll();
		
	}

	const showQuestionButton = document.querySelector("#showQuestion");
	showQuestionButton.addEventListener("click", showNextQuestion);

	// const showScoreButton = document.querySelector("#showScore2");
	// showScoreButton.addEventListener("click", function () {
	// 	overlayQuestion.style.display = "visible";
	// 	alert(userNickname + " 探險家，恭喜你獲得總分: " + totalScore);
	// });









});
