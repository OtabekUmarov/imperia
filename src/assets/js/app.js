

let productBoxes = document.querySelectorAll('.product__item')

productBoxes.forEach(product => {
  let pictImg = product.querySelector('.product__img img')
  let prevImg = pictImg.getAttribute('src')
  let nextImg = pictImg.getAttribute('data-img')

  pictImg.addEventListener('mouseenter', ()=> {
    pictImg.setAttribute('src',nextImg)
  })
  pictImg.addEventListener('mouseleave', ()=> {
    pictImg.setAttribute('src',prevImg)
  })
})


let poiskBtn = document.querySelector('.poisk')

poiskBtn.addEventListener('click', ()=> {
  document.querySelector('.head__poisk input').classList.toggle('active')
  poiskBtn.classList.toggle('active')
})

let bars = document.querySelector('.bars')
bars.addEventListener('click', ()=> {
  document.querySelector('.head').classList.toggle('active')
  bars.classList.toggle('active')
})

let images = document.querySelectorAll('.view__small--img .item img')
images.forEach(img => {
  img.addEventListener('click', ()=> {
    let src = img.getAttribute('src')
    document.querySelector('.view__big--img img').setAttribute('src', src)
  })
})















let slid1 = new Splide( '.slider', {
	type   : 'loop',
	perPage: 4,
  autoplay : false,
  interval: 1000,
  perMove: 1,
  pagination: false,
  arrows: false,
  breakpoints: {
		992: {
			perPage: 3,
      perMove: 1,
		},
		767: {
			perPage: 2,
      perMove: 1,
      pagination: true
		}
	}
})
slid1.mount();

let slid2 = new Splide( '.product', {
	type   : 'loop',
	perPage: 4,
  autoplay : false,
  interval: 1000,
  perMove: 1,
  pagination: false,
  arrows: false,
  breakpoints: {
		992: {
			perPage: 3,
      perMove: 1,
		},
		767: {
			perPage: 2,
      perMove: 1,
      pagination: false
		}
	}
})
slid2.mount();

let slid3 = new Splide( '.product .box', {
	// type   : 'loop',
	perPage: 3,
  autoplay : false,
  interval: 1000,
  perMove: 1,
  pagination: false,
  arrows: false,
  breakpoints: {
		767: {
			perPage: 1,
      perMove: 1,
      pagination:true
		}
	}
})
slid3.mount();

let category = new Splide( '.category', {
	// type   : 'loop',
	perPage: 4,
  autoplay : false,
  interval: 1000,
  perMove: 1,
  pagination: false,
  arrows: false,
  breakpoints: {
		767: {
			perPage: 2,
      perMove: 1,
      pagination:true
		}
	}
})
category.mount();

// let slider2 = new Splide( '.cat', {
// 	type   : 'loop',
// 	perPage: 4,
//   autoplay : false,
//   interval: 1000,
//   perMove: 1,
//   pagination: false,
//   arrows: false,
//   breakpoints: {
// 		992: {
// 			perPage: 3,
//       perMove: 1,
// 		},
// 		767: {
// 			perPage: 2,
//       perMove: 1,
//       pagination: false
// 		}
// 	}
// })
// slider2.mount();
