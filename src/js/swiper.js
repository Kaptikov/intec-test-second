import Swiper from 'swiper'
import Pagination from '/node_modules/swiper/modules/pagination.mjs'
import Autoplay from '/node_modules/swiper/modules/autoplay.mjs'
import EffectFade from '/node_modules/swiper/modules/effect-fade.mjs'
import 'swiper/swiper-bundle.css'

// Установка модулей Swiper
// SwiperCore.use([Pagination, Autoplay, EffectFade])

// Использование Swiper
const swiper = new Swiper('.main-block__swiper', {
  modules: [Pagination, Autoplay, EffectFade],
  // loop: true,
  slidesPerView: 1,
  simulateTouch: true,
  direction: 'vertical',

  pagination: {
    el: '.main-block__swiper-pagination',
    clickable: true,
  },

  speed: 1500,

  effect: 'fade',

  fadeEffect: { crossFade: true },

  // autoplay: {
  //   delay: 2500,
  //   stopOnLastSlide: false,
  // },
})

// import Swiper, { Pagination } from 'swiper/modules'
// import 'swiper/css'

// // import 'swiper/swiper-bundle.css'

// // Swiper.use([Pagination, Autoplay, EffectFade])

// let swiper1 = new Swiper('.main-block__swiper', {
//   modules: [Pagination],

//   loop: true,
//   slidesPerView: 1,

//   // speed: 800,

//   // effect: 'fade',

//   // fadeEffect: {
//   //   crossFade: true,
//   // },

//   simulateTouch: true,

//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },

//   // autoplay: {
//   //   delay: 2500,
//   //   stopOnLastSlide: false,
//   // },

//   // breakpoints: {
//   //   320: {
//   //     slidesPerView: 1,
//   //     spaceBetween: 44,
//   //   },
//   //   524: {
//   //     slidesPerView: 2,
//   //     spaceBetween: 42,
//   //   },
//   //   767: {
//   //     slidesPerView: 3,
//   //     spaceBetween: 47,
//   //   },
//   // },
// })
