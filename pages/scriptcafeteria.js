function menuclick() {
   let hamb = document.querySelector('.menu-hamb')
   let nav = document.getElementById('listmenu')

   nav.classList.toggle('activated')
   if(nav.classList.contains('activated')) {
      hamb.classList.toggle('actv')
   } else {
      hamb.classList.remove('actv')
   }
}