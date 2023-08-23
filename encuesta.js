/*
function next(choice) {
  const surveyContainer = document.getElementById('survey-container');

  if (choice === 'pareja') {
    const prodPene_Pene = [

      'https://www.maxx.com.ar/productos/vibrador-telescopico/',
      'https://www.maxx.com.ar/productos/copa-masturbadora/'
    ];
    const randomProduct = random(prodPene_Pene);
    surveyContainer.innerHTML = `
          <h1>Encuesta</h1>
          <p>Seleccionaste: En pareja</p>
          <div id="btns">
          <button onclick="next('vulva_pene')">
            <img src="icons/pene-vulva.png" class="x2">
            <p>Vulva Pene</p>
          </button>
          <button onclick="next('vulva_vulva')">
            <img src="icons/vulva-vulva.png" class="x2">
            <p>Vulva Vulva</p>
          </button>
          <button onclick="window.location.href='${randomProduct}'">
            <img src="icons/pene-pene.png" class="x2">
            <p>Pene Pene</p>
          </button>
          </div>
          <button onclick="location.reload();" class="back-btn">
          <i class="arrow"></i>
          <p>ATRÁS</p>
          </button>
        `;
  } else if (choice === 'solas') {
    // Lógica para la opción "A solas"
    const prodPene = [
      'https://www.maxx.com.ar/productos/copa-masturbadora/',
      'https://www.maxx.com.ar/productos/maxx-play-uovo-masturbador-peneano/',
    ];
    const randomProduct = random(prodPene);
    surveyContainer.innerHTML = `
          <h1>Encuesta</h1>
          <p>Seleccionaste: A solas</p>
          <div id="btns">
          <button onclick="next('vulva')">
            <img src="icons/vulva.png">
            <p>Vulva</p>
          </button>
          <button onclick="window.location.href='${randomProduct}'">
            <img src="icons/pene.png">
            <p>Pene</p>
          </button>
          <button onclick="next('ano')">
            <img src="icons/anal-2.png">
            <p>Ano</p>
          </button>
          </div>
          <button onclick="location.reload();" class="back-btn">
          <i class="arrow"></i>
          <p>ATRÁS</p>
          </button>
        `;
  } else if (choice === 'vulva_pene') {
    // Lógica para el camino "Vulva Pene"
    const prodInnovar = [
      'https://www.maxx.com.ar/productos/succionador-y-estimulador-pinzas/',
      'https://www.maxx.com.ar/productos/maxx-play-estimulador-clixx/'
    ];
    const prodDistancia = [
      'https://www.maxx.com.ar/productos/vibrador-telescopico/',
      'https://www.maxx.com.ar/productos/maxx-play-estimulador-clixx/'
    ];
    const prodOrgasmo = [
      'https://www.maxx.com.ar/productos/maxx-play-suxx/',
      'https://www.maxx.com.ar/productos/maxx-play-aro-vibrador/'
    ];
    const prodAnal = [
      'https://www.maxx.com.ar/productos/maxx-play-plug-baxx/',
      'https://www.maxx.com.ar/productos/vibrador-telescopico/'
    ];
    const randomProduct = random(prodInnovar);
    const randomProduct1 = random(prodDistancia);
    const randomProduct2 = random(prodOrgasmo);
    const randomProduct3 = random(prodAnal);
    surveyContainer.innerHTML = `
        <h1>Encuesta</h1>
        <p>Seleccionaste: Vulva Pene</p>
        <div id="btns">
        <button onclick="window.location.href='${randomProduct}'">
          <img src="icons/innovar-cama.png">
          <p>Quiero innovar en la cama</p>
        </button>
        <button onclick="window.location.href='${randomProduct1}'">
          <img src="icons/distancia-2.png">
          <p>Quiero jugar a distancia</p>
        </button>
        <button onclick="window.location.href='${randomProduct2}'">
          <img src="icons/placer-penetracion.png">
          <p>Quiero tener más orgasmos durante la penetración</p>
        </button>
        <button onclick="window.location.href='${randomProduct3}'">
          <img src="icons/placer-anal.png">
          <p>Quiero placer anal</p>
        </button>
        </div>
        <button onclick="next('pareja')" class="back-btn">
        <i class="arrow"></i>
        <p>ATRÁS</p>
        </button>
      `;
  } else if (choice === 'vulva_vulva') {
    // Lógica para el camino "Vulva Pene"
    const prodPenetracion = [
      'https://www.maxx.com.ar/productos/maxx-play-vibrador-rabbit/',
      'https://www.maxx.com.ar/productos/maxx-play-suxx/'
    ];
    const prodDistancia = [
      'https://www.maxx.com.ar/productos/vibrador-telescopico/',
      'https://www.maxx.com.ar/productos/maxx-play-estimulador-clixx/'
    ];
    const prodVersatil = [
      'https://www.maxx.com.ar/productos/succionador-y-estimulador-pinzas/',
      'https://www.maxx.com.ar/productos/maxx-play-estimulador-clixx/'
    ];

    const randomProduct = random(prodPenetracion);
    const randomProduct1 = random(prodDistancia);
    const randomProduct2 = random(prodVersatil);

    surveyContainer.innerHTML = `
          <h1>Encuesta</h1>
          <p>Seleccionaste: Vulva Vulva</p>
          <div id="btns">
          <button onclick="window.location.href='${randomProduct}'">
          <img src="icons/dildo.png">
            <p>Quiero juguete con penetracion</p>
          </button>
          <button onclick="window.location.href='${randomProduct1}'">
          <img src="icons/distancia-2.png">
            <p>Quiero jugar a distancia</p>
          </button>
          <button onclick="window.location.href='${randomProduct2}'">
            <img src="icons/versatil.png">
            <p>Quiero un juguete versátil</p>
          </button>
          </div>
          <button onclick="next('pareja')" class="back-btn">
          <i class="arrow"></i>
          <p>ATRÁS</p>
          </button>
  `;
  }
  else if (choice === 'vulva') {
    // Lógica para el camino "Vulva"
    const prodConocerme = [
      'https://www.maxx.com.ar/productos/maxx-play-vibrador-rabbit/',
      'https://www.maxx.com.ar/productos/maxx-play-suxx/',
      'https://www.maxx.com.ar/productos/mini-suxx-iu-succionador/'
    ];
    const prodRapido = [
      'https://www.maxx.com.ar/productos/succionador-y-estimulador-pinzas/',
      'https://www.maxx.com.ar/productos/maxx-play-mini-suxx-bee-succionador/',
      'https://www.maxx.com.ar/productos/maxx-play-suxx/',
    ];
    const prodG = [
      'https://www.maxx.com.ar/productos/maxx-play-g-spot-vibrador-y-masajeador/',
      'https://www.maxx.com.ar/productos/vibrador-telescopico/',
      'https://www.maxx.com.ar/productos/masajeador-intimo/',
    ];
    const prodReco = [
      'https://www.maxx.com.ar/productos/maxx-play-estimulador-clixx/',
      'https://www.maxx.com.ar/productos/maxx-play-mini-suxx-bee-succionador/',
      'https://www.maxx.com.ar/productos/maxx-play-vibrador-rabbit/',
    ];

    const randomProduct = random(prodConocerme);
    const randomProduct1 = random(prodRapido);
    const randomProduct2 = random(prodG);
    const randomProduct3 = random(prodReco);
    surveyContainer.innerHTML = `
      <h1>Encuesta</h1>
      <p>Seleccionaste: Vulva</p>
      <div id="btns">
      <button onclick="window.location.href='${randomProduct}'">
        <img src="icons/explorar.png">
        <p>Explorar y conocerme</p>
      </button>
      <button onclick="window.location.href='${randomProduct1}'">
        <img src="icons/rapido.png">
        <p>Quiero conseguir un orgasmo rapido</p>
      </button>
      <button onclick="window.location.href='${randomProduct2}'">
          <img src="icons/g.png">
          <p>Encontrar mi punto - g</p>
      </button>
      <button onclick="window.location.href='${randomProduct3}'">
        <img src="icons/recomendar.png">
        <p>No tengo algo definido, recomendame algo</p>
      </button>
      </div>
      <button onclick="next('solas')" class="back-btn">
      <i class="arrow"></i>
      <p>ATRÁS</p>
      </button>
  `;
  }
  else if (choice === 'ano') {
    const prodPrepararme = [
      'https://www.maxx.com.ar/productos/vibrador-telescopico/',
    ];
    const prodEstimulacion = [
      'https://www.maxx.com.ar/productos/maxx-play-plug-baxx/',
    ];

    const randomProduct = random(prodPrepararme);
    const randomProduct1 = random(prodEstimulacion);
    surveyContainer.innerHTML = `
      <h1>Encuesta</h1>
      <p>Seleccionaste: Ano</p>
      <div id="btns">
      <button onclick="window.location.href='${randomProduct}'">
        <img src="icons/anal-2.png">
        <p>Quiero prepararme para experimentar relaciones anales</p>
      </button>
      <button onclick="window.location.href='${randomProduct1}'">
        <img src="icons/placer-anal.png">
        <p>Quiero disfrutar de la estimulacion anal</p>
      </button>
      </div>
      <button onclick="next('solas')" class="back-btn">
      <i class="arrow"></i>
      <p>ATRÁS</p>
      </button>
  `;
  }
}
*/
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

      },
      {
        url: '',
        icon: 'icons/vulva-vulva.png',
        text: 'Vulva Vulva',
        next: 'vulva_vulva',
      },
      {
        url: random([
          'https://www.maxx.com.ar/productos/vibrador-telescopico/',
          'https://www.maxx.com.ar/productos/copa-masturbadora/'
        ]),
        icon: 'icons/pene-pene.png',
        text: 'Pene Pene',
        next: '',
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
        next: '',
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
  
  // Otros datos de productos
};

function generateButtons(choices) {
  console.log(choices);
  return choices.map(choice => {
    if (choice.next == '') {
      return `
      <button onclick="window.location.href='${choice.url}'">
        <img src="${choice.icon}" class="x2">
        <p>${choice.text}</p>
      </button>
    `;
    } else {
      return `
      <button  onclick="next('${choice.next}')">
        <img src="${choice.icon}" class="x2">
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