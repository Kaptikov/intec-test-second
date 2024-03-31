const burger = document?.querySelector('[data-burger]')
// const burgerBtn = document?.querySelector('[data-burger__btn]')
const menu = document?.querySelector('[data-menu]')
// const logo = document?.querySelector('[data-logo]')
// const menuTxt = document?.querySelector('[data-menuTxt]')
// const menuItems = menu?.querySelectorAll('a')
const body = document.body

burger?.addEventListener('click', () => {
  body.classList.toggle('stop-scroll')
  // burger?.classList.toggle('burger--active')
  burger?.classList.toggle('header__burger--active')
  menu?.classList.toggle('header__burger-menu--visible')
})

menuItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop-scroll')
    burger?.classList.remove('header__burger--active')
    menu?.classList.remove('header__burger-menu--visible')
  })
})
