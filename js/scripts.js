$(() => {
	// Ширина окна для ресайза
	WW = $(window).width()


	// Основной слайдер на главной
	if ($('.main_slider .swiper').length) {
		new Swiper('.main_slider .swiper', {
			loop: true,
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			}
		})
	}


	// Мероприятия
	const eventsSliders = []

	$('.events .swiper').each(function (i) {
		$(this).addClass('events_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			grabCursor: true,
			effect: "creative",
			creativeEffect: {
				prev: {
					shadow: true,
					translate: ["-20%", 0, -1],
				},
				next: {
					translate: ["100%", 0, 0],
				},
			}
		}

		eventsSliders.push(new Swiper('.events_s' + i, options))
	})


	// Карусель проектов
	const projectsSliders = []

	$('.projects .carousel').each(function (i) {
		$(this).addClass('projects_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 24,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1440: {
					spaceBetween: 40,
					slidesPerView: 3
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.$el).find('.thumb').outerHeight() * 0.5
						)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.$el).find('.thumb').outerHeight() * 0.5
						)
					})
				}
			}
		}

		projectsSliders.push(new Swiper('.projects_s' + i, options))
	})


	// Карусель изображений в товаре
	const projectsThumbsSliders = []

	$('.projects .project .swiper').each(function (i) {
		$(this).addClass('project_thumbs_s' + i)

		let options = {
			loop: false,
			speed: 500,
			spaceBetween: 0,
			nested: true,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			slidesPerView: 1,
			preloadImages: false,
			lazy: {
				enabled: true,
				// checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			grabCursor: true,
			effect: "creative",
			creativeEffect: {
				prev: {
					shadow: true,
					translate: ["-20%", 0, -1],
				},
				next: {
					translate: ["100%", 0, 0],
				}
			}
		}

		projectsThumbsSliders.push(new Swiper('.project_thumbs_s' + i, options))
	})


	// Карусель клиентов
	const clientsSliders = []

	$('.clients .swiper').each(function (i) {
		$(this).addClass('clients_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 24,
					slidesPerView: 1
				},
				480: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 4
				},
				1280: {
					spaceBetween: 24,
					slidesPerView: 5
				},
				1440: {
					spaceBetween: 24,
					slidesPerView: 7
				}
			}
		}

		clientsSliders.push(new Swiper('.clients_s' + i, options))
	})


	// Карусель статей
	const articlesSliders = []

	$('.articles .swiper').each(function (i) {
		$(this).addClass('articles_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 24,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1440: {
					spaceBetween: 32,
					slidesPerView: 4
				},
				1900: {
					spaceBetween: 40,
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.$el).find('.thumb').outerHeight() * 0.5
						)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.$el).find('.thumb').outerHeight() * 0.5
						)
					})
				}
			}
		}

		articlesSliders.push(new Swiper('.articles_s' + i, options))
	})


	// ТЕМАТИЧЕСКОЕ ОФОРМЛЕНИЕ
	const thematicDesignSliders = []

	$('.thematic_design .swiper').each(function (i) {
		$(this).addClass('thematic_design_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 24,
					slidesPerView: 1
				},
				480: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 24,
					slidesPerView: 4
				},
				1440: {
					spaceBetween: 32,
					slidesPerView: 4
				},
				1900: {
					spaceBetween: 40,
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.$el).find('.thumb').outerHeight() * 0.5
						)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.$el).find('.thumb').outerHeight() * 0.5
						)
					})
				}
			}
		}

		thematicDesignSliders.push(new Swiper('.thematic_design_s' + i, options))
	})


	// Отзывы
	if ($('.reviews .swiper').length) {
		new Swiper('.reviews .swiper', {
			loop: false,
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 40,
			slidesPerView: 1,
			autoHeight: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			}
		})
	}


	// Карусель видео
	const videosSliders = []

	$('.videos .swiper').each(function (i) {
		$(this).addClass('videos_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 24,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1440: {
					spaceBetween: 32,
					slidesPerView: 3
				},
				1900: {
					spaceBetween: 40,
					slidesPerView: 3
				}
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.$el).find('.thumb').outerHeight() * 0.5
						)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.$el).find('.thumb').outerHeight() * 0.5
						)
					})
				}
			}
		}

		videosSliders.push(new Swiper('.videos_s' + i, options))
	})


	// Карусель писем
	const lettersSliders = []

	$('.letters .swiper').each(function (i) {
		$(this).addClass('letters_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 24,
					slidesPerView: 1
				},
				480: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 4
				},
				1280: {
					spaceBetween: 24,
					slidesPerView: 5
				},
				1440: {
					spaceBetween: 15,
					slidesPerView: 7
				}
			}
		}

		lettersSliders.push(new Swiper('.letters_s' + i, options))
	})


	// Карусель площадок
	const areasSliders = []

	$('.areas .carousel').each(function (i) {
		$(this).addClass('areas_s' + i)

		let options = {
			loop: true,
			speed: 750,
			slidesPerView: 1,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 24
				},
				1440: {
					spaceBetween: 40
				}
			}
		}

		areasSliders.push(new Swiper('.areas_s' + i, options))
	})


	// Карусель площадок - Изображения
	const areasItemSliders = []

	$('.areas .item .swiper').each(function (i) {
		$(this).addClass('areas_item_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			nested: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				// checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			grabCursor: true,
			effect: "creative",
			creativeEffect: {
				prev: {
					shadow: true,
					translate: ["-20%", 0, -1],
				},
				next: {
					translate: ["100%", 0, 0],
				},
			}
		}

		areasItemSliders.push(new Swiper('.areas_item_s' + i, options))
	})


	// Слайдер в контенте
	if ($('.slider_block .swiper').length) {
		new Swiper('.slider_block .swiper', {
			loop: true,
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 40,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			autoplay: {
				delay: 10000,
				disableOnInteraction: false,
				waitForTransition: false
			}
		})
	}


	// Квиз
	$('.quiz_modal .form.step1').submit(function (e) {
		e.preventDefault()

		$('.quiz_modal .form.step1 .submit').hide()
		$('.quiz_modal .contacts_data .bg').fadeOut(200)
	})

	$('#quiz_modal .contacts_data .form').submit(function (e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: '#quiz_modal2',
			type: 'inline'
		}])
	})

	$('#quiz_modal2 .form').submit(function (e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: '#quiz_modal3',
			type: 'inline'
		}], {
			on: {
				reveal: () => {
					if ($('.quiz_modal.fancybox__content .idea .swiper').length) {
						// Квиз - Идеи
						const ideasSliders = []

						$('.quiz_modal.fancybox__content .idea .swiper').each(function (i) {
							$(this).addClass('ideas_s' + i)

							let options = {
								loop: false,
								speed: 500,
								watchSlidesProgress: true,
								slideActiveClass: 'active',
								slideVisibleClass: 'visible',
								navigation: {
									nextEl: '.swiper-button-next',
									prevEl: '.swiper-button-prev'
								},
								breakpoints: {
									0: {
										spaceBetween: 0,
										slidesPerView: 1
									},
									768: {
										spaceBetween: 0,
										slidesPerView: 2
									},
									1024: {
										spaceBetween: 0,
										slidesPerView: 3
									},
									1280: {
										spaceBetween: 10,
										slidesPerView: 4
									},
									1440: {
										spaceBetween: 18,
										slidesPerView: 4
									}
								},
								on: {
									init: swiper => {
										setTimeout(() => {
											$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
												'top', $(swiper.$el).find('.thumb').outerHeight() * 0.5
											)
										})
									},
									resize: swiper => {
										setTimeout(() => {
											$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
												'top', $(swiper.$el).find('.thumb').outerHeight() * 0.5
											)
										})
									}
								}
							}

							ideasSliders.push(new Swiper('.ideas_s' + i, options))
						})
					}
				}
			}
		})
	})

	$('#quiz_modal3 .form').submit(function (e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: '#quiz_modal4',
			type: 'inline'
		}], {
			on: {
				reveal: () => {
					if ($('.quiz_modal.fancybox__content .emotions .swiper').length) {
						// Квиз - Эмоции
						const emotionsSliders = []

						$('.quiz_modal.fancybox__content .emotions .swiper').each(function (i) {
							$(this).addClass('emotions_s' + i)

							let options = {
								loop: false,
								speed: 500,
								watchSlidesProgress: true,
								slideActiveClass: 'active',
								slideVisibleClass: 'visible',
								navigation: {
									nextEl: '.swiper-button-next',
									prevEl: '.swiper-button-prev'
								},
								breakpoints: {
									0: {
										spaceBetween: 0,
										slidesPerView: 1
									},
									768: {
										spaceBetween: 0,
										slidesPerView: 2
									},
									1024: {
										spaceBetween: 0,
										slidesPerView: 3
									},
									1280: {
										spaceBetween: 10,
										slidesPerView: 4
									},
									1440: {
										spaceBetween: 18,
										slidesPerView: 4
									}
								},
								on: {
									init: swiper => {
										setTimeout(() => {
											$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
												'top', $(swiper.$el).find('.thumb').outerHeight() * 0.5
											)
										})
									},
									resize: swiper => {
										setTimeout(() => {
											$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
												'top', $(swiper.$el).find('.thumb').outerHeight() * 0.5
											)
										})
									}
								}
							}

							emotionsSliders.push(new Swiper('.emotions_s' + i, options))
						})
					}
				}
			}
		})
	})


	$('#quiz_modal4 .form').submit(function (e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: '#quiz_finish_modal',
			type: 'inline'
		}])
	})


	// Моб. меню
	$('header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('header .mob_menu_btn').toggleClass('active')
		$('body').toggleClass('menu_open')
		$('header .menu').toggleClass('show')

		if (is_touch_device()) $('body').css('cursor', 'pointer')
	})

	$(document).click(e => {
		if ($(e.target).closest('.menu.show, .mob_menu_btn').length === 0 && $('body').hasClass('menu_open')) {
			$('header .mob_menu_btn').removeClass('active')
			$('body').removeClass('menu_open')
			$('header .menu').removeClass('show')

			if (is_touch_device()) $('body').css('cursor', 'default')
		}
	})


	// Маска ввода
	$('input[type=tel]').inputmask('+7 (999) 999-99-99')

	if ($('.quiz_modal').length) {
		$('.quiz_modal .date_input').inputmask({
			alias: "datetime",
			placeholder: '__.__.____',
			inputFormat: "dd.mm.yyyy"
		})
	}


	// Кастомный select
	$('select').niceSelect()


	// Выбор файла
	$('body').on('change', 'input[type=file]', function (e) {
		$(this).closest('.file').find('label .path').text($(this).val())
	})


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.l10n = {
		CLOSE: "Закрыть",
		NEXT: "Следующий",
		PREV: "Предыдущий",
		MODAL: "Вы можете закрыть это модальное окно нажав клавишу ESC"
	}

	Fancybox.defaults.template = {
		closeButton: '<svg><use xlink:href="images/sprite.svg#ic_close"></use></svg>',
		spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
		main: null
	}

	// Всплывающие окна
	$('body').on('click', '.modal_btn', function (e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: $(this).data('modal'),
			type: 'inline'
		}])
	})


	// Увеличение картинки
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false,
		},
		Thumbs: {
			autoStart: false,
		},
		on: {
			shouldClose: (fancybox, event) => {
				const value = event && event.target ? parseInt(event.target.dataset.value, 10) : 0

				if (value !== 1) {
					if ($('.band_modal').length) {
						$('#fancybox-' + fancybox.id).remove()

						return false
					}
				}
			}
		}
	})


	Fancybox.bind('[data-type="ajax"]', {
		on: {
			reveal: () => {
				if ($('.project_modal .gallery .swiper').length) {
					const projectThumbs = new Swiper('.project_modal .gallery .thumbs .swiper', {
						loop: false,
						speed: 500,
						watchSlidesProgress: true,
						slideActiveClass: 'active',
						slideVisibleClass: 'visible',
						slidesPerView: 7,
						breakpoints: {
							768: {
								spaceBetween: 16
							},
							1440: {
								spaceBetween: 24
							}
						},
					})

					const projectSlider = new Swiper('.project_modal .gallery .big .swiper', {
						loop: false,
						speed: 500,
						watchSlidesProgress: true,
						slideActiveClass: 'active',
						slideVisibleClass: 'visible',
						spaceBetween: 24,
						slidesPerView: 1,
						navigation: {
							nextEl: '.swiper-button-next',
							prevEl: '.swiper-button-prev'
						},
						thumbs: {
							swiper: projectThumbs
						}
					})
				}


				if ($('.booking_modal').length) {
					$('.booking_modal input[type=tel]').inputmask('+7 (999) 999-99-99')

					$('.booking_modal .date_input').inputmask({
						alias: "datetime",
						placeholder: '__.__.____',
						inputFormat: "dd.mm.yyyy"
					})
				}


				if ($('.band_modal .gallery .carousel').length) {
					new Swiper('.band_modal .gallery .carousel', {
						loop: false,
						speed: 500,
						watchSlidesProgress: true,
						slideActiveClass: 'active',
						slideVisibleClass: 'visible',
						preloadImages: false,
						navigation: {
							nextEl: '.swiper-button-next',
							prevEl: '.swiper-button-prev'
						},
						lazy: {
							enabled: true,
							checkInView: true,
							loadOnTransitionStart: true,
							loadPrevNext: true
						},
						breakpoints: {
							0: {
								spaceBetween: 24,
								slidesPerView: 1
							},
							768: {
								spaceBetween: 24,
								slidesPerView: 2
							},
							1024: {
								spaceBetween: 24,
								slidesPerView: 3
							},
							1440: {
								spaceBetween: 32,
								slidesPerView: 3
							},
							1900: {
								spaceBetween: 45,
								slidesPerView: 3
							}
						},
						on: {
							init: swiper => {
								setTimeout(() => {
									$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
										'top', $(swiper.$el).find('.thumb').outerHeight() * 0.5
									)
								})
							},
							resize: swiper => {
								setTimeout(() => {
									$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
										'top', $(swiper.$el).find('.thumb').outerHeight() * 0.5
									)
								})
							}
						}
					})
				}


				if ($('.band_modal .gallery .swiper-slide .swiper').length) {
					const bandGalleryThumbsSliders = []

					$('.band_modal .gallery .swiper-slide .swiper').each(function (i) {
						$(this).addClass('band_gallery_thumbs_s' + i)

						let options = {
							loop: false,
							speed: 500,
							spaceBetween: 0,
							nested: true,
							watchSlidesProgress: true,
							slideActiveClass: 'active',
							slideVisibleClass: 'visible',
							pagination: {
								el: '.swiper-pagination',
								type: 'bullets',
								clickable: true,
								bulletActiveClass: 'active'
							},
							slidesPerView: 1,
							preloadImages: false,
							lazy: {
								enabled: true,
								// checkInView: true,
								loadOnTransitionStart: true,
								loadPrevNext: true
							},
							grabCursor: true,
							effect: "creative",
							creativeEffect: {
								prev: {
									shadow: true,
									translate: ["-20%", 0, -1],
								},
								next: {
									translate: ["100%", 0, 0],
								}
							}
						}

						bandGalleryThumbsSliders.push(new Swiper('.band_gallery_thumbs_s' + i, options))
					})
				}


				if ($('.band_modal .images .swiper').length) {
					new Swiper('.band_modal .images .swiper', {
						loop: false,
						speed: 500,
						watchSlidesProgress: true,
						slideActiveClass: 'active',
						slideVisibleClass: 'visible',
						preloadImages: false,
						lazy: {
							enabled: true,
							checkInView: true,
							loadOnTransitionStart: true,
							loadPrevNext: true
						},
						pagination: {
							el: '.swiper-pagination',
							type: 'bullets',
							clickable: true,
							bulletActiveClass: 'active'
						},
						spaceBetween: 24,
						slidesPerView: 1
					})
				}
			}
		}
	})


	// Аккордион
	$('body').on('click', '.accordion .accordion_item .head', function (e) {
		e.preventDefault()

		const $item = $(this).closest('.accordion_item'),
			$accordion = $(this).closest('.accordion')

		if ($item.hasClass('active')) {
			$item.removeClass('active').find('.data').slideUp(300)
		} else {
			$accordion.find('.accordion_item').removeClass('active')
			$accordion.find('.data').slideUp(300)

			$item.addClass('active').find('.data').slideDown(300)
		}
	})


	if (is_touch_device()) {
		// Подменю на тач скрине
		$('header .menu > * > a.sub_link').addClass('touch_link')

		$('header .menu > * > a.sub_link').click(function (e) {
			const $dropdown = $(this).next()

			if ($dropdown.css('visibility') === 'hidden') {
				e.preventDefault()

				$('header .sub_menu').removeClass('show')
				$dropdown.addClass('show')

				$('body').css('cursor', 'pointer')
			}
		})

		// Закрываем под. меню при клике за её пределами
		$(document).click((e) => {
			if ($(e.target).closest('.menu').length === 0) {
				$('header .menu .sub_menu').removeClass('show')

				$('body').css('cursor', 'default')
			}
		})
	}


	// Отправка форм
	// $('.modal .form').submit(function (e) {
	// 	e.preventDefault()

	// 	Fancybox.close()

	// 	Fancybox.show([{
	// 		src: '#success_modal',
	// 		type: 'inline'
	// 	}])
	// })


	// Видео
	$('.areas .video_link .btn').click(function (e) {
		e.preventDefault()

		$(this).next().addClass('show')
	})
})



$(window).on('resize', () => {
	if (typeof WW !== 'undefined' && WW != $(window).width()) {
		// Моб. версия
		if (!firstResize) {
			$('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1, maximum-scale=1')
			if ($(window).width() < 375) $('meta[name=viewport]').attr('content', 'width=375, user-scalable=no')

			firstResize = true
		} else {
			firstResize = false
		}


		// Перезапись ширины окна
		WW = $(window).width()
	}
})