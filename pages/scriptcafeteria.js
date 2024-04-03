
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
      img: '../assets/images/coffees/featured-cafe-1.jpg'
   },
   {
      nome: 'Hazelnut Latte',
      views: 43230,
      id:'#popnow2',
      img: '../assets/images/coffees/featured-cafe-2.jpg'
   },
   {
      nome: 'Vanilla Latte',
      views: 23203,
      id:'#popnow3',
      img: '../assets/images/coffees/featured-cafe-3.jpg'
   },
   {
      nome: 'Sandwich',
      views: 13203,
      id:'#popnow4',
      img: '../assets/images/special-menu/img_product.png'
   }, 
   {
      nome: 'Hot Milk',
      views: 15533,
      id:'#popnow5',
      img: '../assets/images/special-menu/img_product-4.png'
   },
   {
      nome: 'Coffe Ice Cream',
      views: 3703,
      id:'#popnow6',
      img: '../assets/images/special-menu/img_product-5.png'
   },
   {
      nome: 'Cappucino',
      views: 11983,
      id:'#popnow7',
      img: '../assets/images/special-menu/img_product-1.png'
   },
   {
      nome: 'Moccacinno',
      views: 7564,
      id:'#popnow8',
      img: '../assets/images/special-menu/img_product-2.png'
   },
   {
      nome: 'Waffle Ice Creme',
      views: 25678,
      id:'#popnow9',
      img: '../assets/images/special-menu/img_product-3.png'
   }
   ,
   {
      nome: 'Black Coffee',
      views: 25678,
      id:'#popnow10',
      img: '../assets/images/special-menu/img_product-7.jpg'
   }
   ,
   {
      nome: 'Orange Juice',
      views: 25678,
      id:'#popnow11',
      img: '../assets/images/special-menu/img_product-8.png'
   }
   ,
   {
      nome: 'Banoffee',
      views: 25678,
      id:'#popnow12',
      img: '../assets/images/special-menu/img_product-9.jpg'
   }
   ,
   {
      nome: 'Misto Quente',
      views: 25678,
      id:'#popnow13',
      img: '../assets/images/special-menu/img_product-10.jpg'
   }
   ,
   {
      nome: 'Brownie',
      views: 25678,
      id:'#popnow14',
      img: '../assets/images/special-menu/img_product-11.jpg'
   }   
   ,
   {
      nome: 'Apple Pie',
      views: 25678,
      id:'#popnow15',
      img: '../assets/images/special-menu/Apple-Pie_8.webp'
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
   specialMenu2.style.zIndex = '-1'
   specialMenu.style.zIndex = '2'
})

radioTwo.addEventListener('click', () => {
   specialMenu2.style.zIndex = '2'
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

      bigMenu.appendChild(topPart)
      bigMenu.appendChild(image)

      fullScreen.appendChild(bigMenu)

      close.addEventListener('click', () => {
         fullScreen.remove()
      })
   })
})


