function menu() {
   let menu = document.querySelector('nav ul')
   let menubtn = document.querySelector('nav .menu')

   menu.classList.toggle('activated')

   if(menu.classList.contains('activated')) {
      menubtn.style.backdropFilter = 'blur(20px)'
      menubtn.style.backgroundColor = 'rgba(0, 0, 0, 0.90)'
      menubtn.style.transition = 'background-color 1s ease-in-out'
      menu.style.zIndex= '2'

      menubtn.classList.add('active')
   } else {
      menubtn.style.backdropFilter = 'blur(0px)'
      menubtn.style.backgroundColor = 'transparent'
      menubtn.classList.remove('active')
   }
}