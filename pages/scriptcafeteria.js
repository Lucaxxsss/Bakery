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
let infoCoffeeArray = Array.from(infoCoffee);

let info = [
   {
      nome: 'Espresso',
      views: 29058,
      id:'#popnow1'
   },
   {
      nome: 'Hazelnut Latte',
      views: 43230,
      id:'#popnow2'
   },
   {
      nome: 'Vanilla Latte',
      views: 23203,
      id:'#popnow3'
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
let searchbarClose = searchbar.nextElementSibling
let searchContainer = document.querySelector('.search');

searchbar.addEventListener('input', function () {
   const termoPesquisa = searchbar.value.toLowerCase();
   const resultadosCafe = info.filter(cafe =>
      cafe.nome.toLowerCase().includes(termoPesquisa));

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

searchbarClose.addEventListener('click', function() {
   console.log('FUCK')
})


// Adiciona o evento de clique aos resultados da pesquisa


document.addEventListener('click', function(event) {
   if (!searchContainer.contains(event.target) && event.target !== searchbar) {
      let anteriorresultsCoffee = searchContainer.querySelector('.results');
      if (anteriorresultsCoffee) {
         anteriorresultsCoffee.remove();
      }
   }
});



