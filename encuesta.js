const productData = {
  pareja: {
    title: 'En pareja',
    back: 'location.reload();',
    options: [
      {
        url: '',
        icon: 'icons/pene-vulva.png',
        text: 'Vulva Pene',
        next: 'vulva_pene',
        class: 'x2',

      },
      {
        url: '',
        icon: 'icons/vulva-vulva.png',
        text: 'Vulva Vulva',
        next: 'vulva_vulva',
        class: 'x2',
      },
      {
        url: random([
          'https://www.maxx.com.ar/productos/vibrador-telescopico/',
          'https://www.maxx.com.ar/productos/copa-masturbadora/'
        ]),
        icon: 'icons/pene-pene.png',
        text: 'Pene Pene',
        next: '',
        class: 'x2',
      }
    ]
  },
  solas: {
    title: 'A solas',
    back: 'location.reload();',
    options: [
      {
        url: '',
        icon: 'icons/vulva.png',
        text: 'Vulva',
        next: 'vulva',
      },
      {
        url: random([
          'https://www.maxx.com.ar/productos/copa-masturbadora/',
          'https://www.maxx.com.ar/productos/maxx-play-uovo-masturbador-peneano/'
        ]),
        icon: 'icons/pene.png',
        text: 'Pene',
        next: '',
      },
      {
        url: random([
          'https://www.maxx.com.ar/productos/vibrador-telescopico/',
          'https://www.maxx.com.ar/productos/maxx-play-plug-baxx/',
        ]),
        icon: 'icons/anal-2.png',
        text: 'Ano',
        next: 'ano',
      }
    ]
  },
  vulva_pene: {
    title: 'Vulva Pene',
    back: "next('pareja')",
    options: [
      {
        url: random([
          'https://www.maxx.com.ar/productos/maxx-play-vibrador-rabbit/',
          'https://www.maxx.com.ar/productos/maxx-play-suxx/',
          'https://www.maxx.com.ar/productos/mini-suxx-iu-succionador/'
        ]),
        icon: 'icons/innovar-cama.png',
        text: 'Quiero innovar en la cama',
        next:'',
      },
      {
        url: random([
          'https://www.maxx.com.ar/productos/succionador-y-estimulador-pinzas/',
          'https://www.maxx.com.ar/productos/maxx-play-mini-suxx-bee-succionador/',
          'https://www.maxx.com.ar/productos/maxx-play-suxx/',
        ]),
        icon: 'icons/distancia-2.png',
        text: 'Quiero jugar a distancia',
        next:'',
      },
      {
        url: random([
          'https://www.maxx.com.ar/productos/maxx-play-suxx/',
          'https://www.maxx.com.ar/productos/maxx-play-aro-vibrador/'
        ]),
        icon: 'icons/placer-penetracion.png',
        text: 'Quiero tener más orgasmos durante la penetración',
        next:'',
      },
      {
        url: random([
          'https://www.maxx.com.ar/productos/maxx-play-plug-baxx/',
          'https://www.maxx.com.ar/productos/vibrador-telescopico/'
        ]),
        icon: 'icons/placer-anal.png',
        text: 'Quiero placer anal',
        next:'',
      }
    ]
  },
  vulva_vulva: {
    title: 'Vulva Vulva',
    back: "next('pareja')",
    options: [
      {
        url: random([
          'https://www.maxx.com.ar/productos/maxx-play-vibrador-rabbit/',
          'https://www.maxx.com.ar/productos/maxx-play-suxx/'
        ]),
        icon: 'icons/dildo.png',
        text: 'Quiero juguete con penetracion',
        next: '',
      },
      {
        url: random([
          'https://www.maxx.com.ar/productos/vibrador-telescopico/',
          'https://www.maxx.com.ar/productos/maxx-play-estimulador-clixx/'
        ]),
        icon: 'icons/distancia-2.png',
        text: 'Quiero jugar a distancia',
        next: '',
      },
      {
        url: random([
          'https://www.maxx.com.ar/productos/succionador-y-estimulador-pinzas/',
          'https://www.maxx.com.ar/productos/maxx-play-estimulador-clixx/'
        ]),
        icon: 'icons/versatil.png',
        text: 'Quiero un juguete versátil',
        next: '',
      },
      {
        url: random([
          'https://www.maxx.com.ar/productos/maxx-play-estimulador-clixx/',
          'https://www.maxx.com.ar/productos/maxx-play-mini-suxx-bee-succionador/',
          'https://www.maxx.com.ar/productos/maxx-play-vibrador-rabbit/',
        ]),
        icon: 'icons/placer-anal.png',
        text: 'Quiero placer anal',
        next: '',
      }
    ]
  },
  vulva: {
    title: 'Vulva',
    back: "next('solas')",
    options: [
      {
        url: random([
          'https://www.maxx.com.ar/productos/maxx-play-vibrador-rabbit/',
          'https://www.maxx.com.ar/productos/maxx-play-suxx/',
          'https://www.maxx.com.ar/productos/mini-suxx-iu-succionador/'
        ]),
        icon: 'icons/explorar.png',
        text: 'Explorar y conocerme',
        next: '',
      },
      {
        url: random([
          'https://www.maxx.com.ar/productos/succionador-y-estimulador-pinzas/',
          'https://www.maxx.com.ar/productos/maxx-play-mini-suxx-bee-succionador/',
          'https://www.maxx.com.ar/productos/maxx-play-suxx/',
        ]),
        icon: 'icons/rapido.png',
        text: 'Quiero conseguir un orgasmo rapido',
        next: '',
      },
      {
        url: random([
          'https://www.maxx.com.ar/productos/maxx-play-g-spot-vibrador-y-masajeador/',
          'https://www.maxx.com.ar/productos/vibrador-telescopico/',
          'https://www.maxx.com.ar/productos/masajeador-intimo/',
        ]),
        icon: 'icons/g.png',
        text: 'Encontrar mi punto - g',
        next: '',
      },
      {
        url: random([
          'https://www.maxx.com.ar/productos/maxx-play-estimulador-clixx/',
          'https://www.maxx.com.ar/productos/maxx-play-mini-suxx-bee-succionador/',
          'https://www.maxx.com.ar/productos/maxx-play-vibrador-rabbit/',
        ]),
        icon: 'icons/recomendar.png',
        text: 'No tengo algo definido, recomendame algo',
        next: '',
      }
    ]
  },
  ano: {
    title: 'Ano',
    back: "next('solas')",
    options: [
      {
        url: random([
          'https://www.maxx.com.ar/productos/vibrador-telescopico/'
        ]),
        icon: 'icons/anal-2.png',
        text: 'Quiero prepararme para experimentar relaciones anales',
        next: '',
      },
      {
        url: random([
          'https://www.maxx.com.ar/productos/maxx-play-plug-baxx/'
        ]),
        icon: 'icons/placer-anal.png',
        text: 'Quiero disfrutar de la estimulacion anal',
        next: '',
      },
    ]
  },
  
  // Otros datos de productos
};

function generateButtons(choices) {
  console.log(choices);
  return choices.map(choice => {
    if (choice.next == '') {
      return `
      <button onclick="window.location.href='${choice.url}'">
        <img src="${choice.icon}" class="${choice.class}">
        <p>${choice.text}</p>
      </button>
    `;
    } else {
      return `
      <button  onclick="next('${choice.next}')">
        <img src="${choice.icon}" class="${choice.class}">
        <p>${choice.text}</p>
      </button>
    `;
    }


  }).join('');
}

function next(choice) {
  const surveyContainer = document.getElementById('survey-container');
  const choiceData = productData[choice];

  const buttonsHtml = generateButtons(choiceData.options);

  surveyContainer.innerHTML = `
    <h1>Encuesta</h1>
    <p>Seleccionaste: ${choiceData.title}</p>
    <div id="btns">
      ${buttonsHtml}
      </div>
      <button onclick="${choiceData.back}" class="back-btn">
      <i class="arrow"></i>
      <p>ATRÁS</p>
      </button>
    
    
  `;
}

function random(urls) {
  return urls[Math.floor(Math.random() * urls.length)];
}