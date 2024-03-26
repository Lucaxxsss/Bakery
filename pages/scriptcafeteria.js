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

let infoCoffee = document.getElementsByClassName('info-coffee')

let infoCoffeeArray = Array.from(infoCoffee)

console.log(infoCoffee)

let info = [
   {
      nome: 'Espresso',
      views: 29058
   },
   {
      nome: 'Hazelnut Latte',
      views: 43230
   },
   {
      nome: 'Vanilla Latte',
      views: 23203
   }
]

function nameCoffee() {
   const coffeInfo = (coffeeElement, index) => {
      let coffeeTittle = document.createElement('h2')
      coffeeTittle.innerHTML = info[index].nome

      let coffeViews = document.createElement('span')
      coffeViews.innerHTML = `${info[index].views}`

      coffeeElement.appendChild(coffeeTittle)
      coffeeElement.appendChild(coffeViews)
   }

   infoCoffeeArray.forEach(coffeInfo)
}

nameCoffee()