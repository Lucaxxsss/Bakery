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
});

// Adiciona o evento de clique aos resultados da pesquisa
searchContainer.addEventListener('click', function(event) {
   anteriorresultsCoffee = searchContainer.querySelector('.results');
   if (anteriorresultsCoffee) {
      anteriorresultsCoffee.remove();
   }
   if (event.target.tagName === 'H2') {
      const nomeCafe = event.target.textContent;
      const cafeClicado = info.find(cafe =>
         cafe.nome.toLowerCase() === nomeCafe.toLowerCase());
      if (cafeClicado) {         
         window.location.href = "#popnow";
      }
   }
});

searchContainer.addEventListener('touchstart', function(event) {
   anteriorresultsCoffee = searchContainer.querySelector('.results');
   if (anteriorresultsCoffee) {
      anteriorresultsCoffee.remove();
   }
   if (event.target.tagName === 'H2') {
      const nomeCafe = event.target.textContent;
      const cafeClicado = info.find(cafe =>
         cafe.nome.toLowerCase() === nomeCafe.toLowerCase());
      if (cafeClicado) {         
         window.location.href = "#popnow";
      }
   }
});

document.addEventListener('click', function(event) {
   if (!searchContainer.contains(event.target) && event.target !== searchbar) {
      let anteriorresultsCoffee = searchContainer.querySelector('.results');
      if (anteriorresultsCoffee) {
         anteriorresultsCoffee.remove();
      }
   }
});
