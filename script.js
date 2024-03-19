function menu() {
   let menu = document.querySelector('nav ul')
   let menubtn = document.querySelector('nav .menu')

   menu.classList.toggle('activated')
   if(menu.classList.contains('activated')) {
      menubtn.style.backdropFilter = 'blur(20px)'
      menubtn.classList.add('active')
   } else {
      menubtn.style.backdropFilter = 'blur(0px)'
      menubtn.classList.remove('active')
   }
}