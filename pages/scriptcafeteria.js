
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

let infoCoffee = document.getElementsByClassName('info-coffee');
console.log(infoCoffee)
let infoCoffeeArray = Array.from(infoCoffee);

let info = [
   {
      nome: 'Espresso',
      views: 29058,
      id:'#popnow1',
      img: '../assets/images/coffees/featured-cafe-1.jpg',
      preco: 2.50
   },
   {
      nome: 'Hazelnut Latte',
      views: 43230,
      id:'#popnow2',
      img: '../assets/images/coffees/featured-cafe-2.jpg',
      preco: 4.50
   },
   {
      nome: 'Vanilla Latte',
      views: 23203,
      id:'#popnow3',
      img: '../assets/images/coffees/featured-cafe-3.jpg',
      preco: 4.00
   },
   {
      nome: 'Sandwich',
      views: 13203,
      id:'#popnow4',
      img: '../assets/images/special-menu/img_product.png',
      preco: 6.00
   }, 
   {
      nome: 'Hot Milk',
      views: 15533,
      id:'#popnow5',
      img: '../assets/images/special-menu/img_product-4.png',
      preco: 3.00
   },
   {
      nome: 'Coffe Ice Cream',
      views: 3703,
      id:'#popnow6',
      img: '../assets/images/special-menu/img_product-5.png',
      preco: 5.00
   },
   {
      nome: 'Cappucino',
      views: 11983,
      id:'#popnow7',
      img: '../assets/images/special-menu/img_product-1.png',
      preco: 4.50
   },
   {
      nome: 'Moccacinno',
      views: 7564,
      id:'#popnow8',
      img: '../assets/images/special-menu/img_product-2.png',
      preco: 5.00
   },
   {
      nome: 'Waffle Ice Creme',
      views: 25678,
      id:'#popnow9',
      img: '../assets/images/special-menu/img_product-3.png',
      preco: 6.50
   },
   {
      nome: 'Black Coffee',
      views: 25678,
      id:'#popnow10',
      img: '../assets/images/special-menu/img_product-7.jpg',
      preco: 2.00
   },
   {
      nome: 'Orange Juice',
      views: 25678,
      id:'#popnow11',
      img: '../assets/images/special-menu/img_product-8.png',
      preco: 3.50
   },
   {
      nome: 'Banoffee',
      views: 25678,
      id:'#popnow12',
      img: '../assets/images/special-menu/img_product-9.jpg',
      preco: 4.00
   },
   {
      nome: 'Misto Quente',
      views: 25678,
      id:'#popnow13',
      img: '../assets/images/special-menu/img_product-10.jpg',
      preco: 5.50
   },
   {
      nome: 'Brownie',
      views: 25678,
      id:'#popnow14',
      img: '../assets/images/special-menu/img_product-11.jpg',
      preco: 3.00
   },   
   {
      nome: 'Apple Pie',
      views: 25678,
      id:'#popnow15',
      img: '../assets/images/special-menu/Apple-Pie_8.webp',
      preco: 4.50
   }
];

function nameCoffee() {
   const coffeInfo = (coffeeElement, index) => {
      let coffeeTittle = document.createElement('h2');
      coffeeTittle.innerHTML = info[index].nome;

      let coffeViews = document.createElement('span');
      coffeViews.innerHTML = `${info[index].views}`;

      coffeeElement.appendChild(coffeeTittle);
      coffeeElement.appendChild(coffeViews);
   };

   infoCoffeeArray.forEach(coffeInfo);
}

nameCoffee();

let searchbar = document.getElementById('search');
let searchContainer = document.querySelector('.search');

searchbar.addEventListener('input', function () {
   const termoPesquisa = searchbar.value.toLowerCase(); //tranforma os caracteres do input em letras minusculas
   const resultadosCafe = info.filter(cafe =>
      cafe.nome.toLowerCase().includes(termoPesquisa)); //procura pra cada cafe do array 'info' o objeto com a chave nome e deixa em minusculo, .includes(), inclui o termoPesquisa, verifica se ele tambem foi convertido para minusculas, e isso retorna 'true' caso for verdadeiro, e 'false' caso contrario
      
   let anteriorresultsCoffee = searchContainer.querySelector('.results');
   if (anteriorresultsCoffee) {
      anteriorresultsCoffee.remove();
   }

   let searchDiv = document.createElement('div');
   searchDiv.classList.add('results');

   resultadosCafe.forEach(cafe => {
      let searchCoffeeName = document.createElement ('h2');
      searchCoffeeName.textContent = cafe.nome;

      searchDiv.appendChild(searchCoffeeName);
   });

   searchContainer.appendChild(searchDiv);

   searchDiv.addEventListener('click', function(event) {
      console.log(resultadosCafe.length)
      const resultsCoffee = event.target.textContent
      const clickedCafe = info.find(cafe => cafe.nome === resultsCoffee)

      if (clickedCafe) {
         window.location.href = clickedCafe.id
      }
   });

   searchbar.addEventListener('input', function (event) {
      if (event.target.value === '') {
         let anteriorresultsCoffee = searchContainer.querySelector('.results');
         if (anteriorresultsCoffee) {
         anteriorresultsCoffee.remove();
    }
     }
   })

});

// Adiciona o evento de clique aos resultados da pesquisa


document.addEventListener('click', function(event) {
   if (!searchContainer.contains(event.target) && event.target !== searchbar) {
      let anteriorresultsCoffee = searchContainer.querySelector('.results');
      if (anteriorresultsCoffee) {
         anteriorresultsCoffee.remove();
      }
   }
});

let radioOne = document.getElementById('pag1')
let radioTwo = document.getElementById('pag2')
let specialMenu = document.querySelector('.popular-coffeess')
let specialMenu2 = document.querySelector('.popular-coffeesss')

radioOne.addEventListener('click', () => {
   specialMenu2.style.visibility = 'hidden'
   specialMenu2.style.opacity = '0'
   specialMenu.style.visibility = 'visible'
   specialMenu.style.opacity = '1'
})

radioTwo.addEventListener('click', () => {
   specialMenu2.style.visibility = 'visible'
   specialMenu2.style.opacity = '1'
   specialMenu.style.visibility = 'hidden'
   specialMenu.style.opacity = '0'
})


let Coffees = document.querySelectorAll('.special-coffee')
let CoffeesArray = Array.from(Coffees)

console.log(Coffees)
CoffeesArray.forEach((cafe, index) => {
   cafe.addEventListener('click', () => {
      let fullScreen = document.createElement('div')
      fullScreen.classList.add('fullscreen')

      document.body.appendChild(fullScreen)

      let bigMenu = document.createElement('div')
      bigMenu.classList.add('bigmenu')

      let titulo = document.createElement('h1')
      titulo.innerHTML = info[index].nome

      let close = document.createElement('div')
      close.classList.add('closebar')

      let closeOne = document.createElement('div')
      let closeTwo = document.createElement('div')

      close.appendChild(closeOne)
      close.appendChild(closeTwo)

      topPart = document.createElement('div')
      topPart.classList.add('top')

      topPart.appendChild(titulo)
      topPart.appendChild(close)

      let image = document.createElement('img')
      image.src = info[index].img

      let cartDiv = document.createElement('div')
      cartDiv.classList.add('cart-div')

      let cartQntd = document.createElement('span')
      cartQntd.innerHTML = 1
      let cartGain = document.createElement('span')
      cartGain.innerHTML = '>>'
      let cartLoose = document.createElement('span')
      cartLoose.innerHTML = '<<'

      cartDiv.appendChild(cartLoose)
      cartDiv.appendChild(cartQntd)
      cartDiv.appendChild(cartGain)

      let buyDiv = document.createElement('div')

      let buyBtn = document.createElement('button')
      buyBtn.innerHTML = 'Finalize Purchase'

      let cartBtn = document.createElement('p')
      cartBtn.innerHTML = 'See Cart'

      buyDiv.appendChild(buyBtn)
      buyDiv.appendChild(cartBtn)
      
      buyDiv.classList.add('buyDiv')

      let priceContainer= document.createElement('div')
      priceContainer.classList.add('price-container')
      let price = document.createElement('span')
      price.innerHTML = `${info[index].preco.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
      priceContainer.appendChild(price)

      bigMenu.appendChild(topPart)
      bigMenu.appendChild(image)
      bigMenu.appendChild(cartDiv)
      bigMenu.appendChild(priceContainer)
      bigMenu.appendChild(buyDiv)

      fullScreen.appendChild(bigMenu)

      var prices = 0;
      let c = 1;

      cartGain.addEventListener('click', () => {
         cartQntd.innerHTML++
         for(c; c<=cartQntd.innerHTML; c++) {
         prices = prices + info[index].preco
         }
         price.innerHTML = `${prices.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
      })
      cartLoose.addEventListener('click', () => {
         if(cartQntd.innerHTML > 1) {
            c--
            cartQntd.innerHTML--
            
            prices = prices - info[index].preco
            price.innerHTML = `${prices.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
         }
      })

      close.addEventListener('click', () => {
         fullScreen.remove()
      })
   })
})


let avaliations = document.querySelectorAll('.person'),
   currentImageIndex = 0,
   max = avaliations.length,
   time = 5000

   function nextImage() {
      avaliations[currentImageIndex].classList.remove('activated')

      currentImageIndex++

      if (currentImageIndex > max - 1)
         currentImageIndex = 0

      console.log(currentImageIndex)

      avaliations[currentImageIndex].classList.add('activated')
   }

   function start() {
      setInterval(() => {
         //troca de imagem
         nextImage()
      }, time)
   }

   window.addEventListener('load', start)