function next(choice) {
    const surveyContainer = document.getElementById('survey-container');
  
    if (choice === 'pareja') {
      const prodPene_Pene = [
  
        'https://www.maxx.com.ar/productos/vibrador-telescopico/',
        'https://www.maxx.com.ar/productos/copa-masturbadora/'
      ];
      const randomProduct = prodPene_Pene[Math.floor(Math.random() * prodPene_Pene.length)];
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
        `;
    } else if (choice === 'solas') {
      // Lógica para la opción "A solas"
      const prodPene = [
        'https://www.maxx.com.ar/productos/copa-masturbadora/',
        'https://www.maxx.com.ar/productos/maxx-play-uovo-masturbador-peneano/',
      ];
      const randomProduct = prodPene[Math.floor(Math.random() * prodPene.length)];
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
      const randomProduct = prodInnovar[Math.floor(Math.random() * prodInnovar.length)];
      const randomProduct1 = prodDistancia[Math.floor(Math.random() * prodDistancia.length)];
      const randomProduct2 = prodOrgasmo[Math.floor(Math.random() * prodOrgasmo.length)];
      const randomProduct3 = prodAnal[Math.floor(Math.random() * prodAnal.length)];
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

      const randomProduct = prodPenetracion[Math.floor(Math.random() * prodPenetracion.length)];
      const randomProduct1 = prodDistancia[Math.floor(Math.random() * prodDistancia.length)];
      const randomProduct2 = prodVersatil[Math.floor(Math.random() * prodVersatil.length)];
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
  `;
    } 
    // else if (choice === 'pene_pene') {
    //   const products = [
  
    //     'https://www.maxx.com.ar/productos/vibrador-telescopico/',
    //     'https://www.maxx.com.ar/productos/copa-masturbadora/'
    //   ];
    //   const randomProduct = products[Math.floor(Math.random() * products.length)];
    //   surveyContainer.innerHTML += `
    //         <p>Productos relacionados:</p>
    //         <a href="${randomProduct}" target="_blank">Producto aleatorio 1</a>
    //       `;
    // } 
    // else if (choice === 'penetracion') {
    //   const products = [
    //     'https://www.maxx.com.ar/productos/maxx-play-vibrador-rabbit/',
    //     'https://www.maxx.com.ar/productos/maxx-play-suxx/'
    //   ];
    //   const randomProduct = products[Math.floor(Math.random() * products.length)];
    //   surveyContainer.innerHTML += `
    //         <p>Productos relacionados:</p>
    //         <a href="${randomProduct}" target="_blank">Producto aleatorio 1</a>
    //       `;
    // } 
    // else if (choice === 'versatil') {
    //   const products = [
    //     'https://www.maxx.com.ar/productos/succionador-y-estimulador-pinzas/',
    //     'https://www.maxx.com.ar/productos/maxx-play-estimulador-clixx/'
    //   ];
    //   const randomProduct = products[Math.floor(Math.random() * products.length)];
    //   surveyContainer.innerHTML += `
    //         <p>Productos relacionados:</p>
    //         <a href="${randomProduct}" target="_blank">Producto aleatorio 1</a>
    //       `;
    // } 
    // else if (choice === 'innovar') {
    //   // Lógica para la opción "Quiero innovar en la cama"
    //   const products = [
    //     'https://www.maxx.com.ar/productos/succionador-y-estimulador-pinzas/',
    //     'https://www.maxx.com.ar/productos/maxx-play-estimulador-clixx/'
    //   ];
    //   const randomProduct = products[Math.floor(Math.random() * products.length)];
    //   surveyContainer.innerHTML += `
    //         <p>Productos relacionados:</p>
    //         <a href="${randomProduct}" target="_blank">Producto aleatorio 1</a>
    //       `;
    // } 
    // else if (choice === 'distancia') {
    //   // Lógica para la opción "Quiero innovar en la cama"
    //   const products = [
    //     'https://www.maxx.com.ar/productos/vibrador-telescopico/',
    //     'https://www.maxx.com.ar/productos/maxx-play-estimulador-clixx/'
    //   ];
    //   const randomProduct = products[Math.floor(Math.random() * products.length)];
    //   surveyContainer.innerHTML += `
    //         <p>Productos relacionados:</p>
    //         <a href="${randomProduct}" target="_blank">Producto aleatorio 1</a>
    //       `;
    // } 
    // else if (choice === 'anal') {
    //   // Lógica para la opción "Quiero innovar en la cama"
    //   const products = [
    //     'https://www.maxx.com.ar/productos/maxx-play-plug-baxx/',
    //     'https://www.maxx.com.ar/productos/vibrador-telescopico/'
    //   ];
    //   const randomProduct = products[Math.floor(Math.random() * products.length)];
    //   surveyContainer.innerHTML += `
    //         <p>Productos relacionados:</p>
    //         <a href="${randomProduct}" target="_blank">Producto aleatorio 1</a>
    //       `;
    // } else if (choice === 'orgasmos') {
    //   // Lógica para la opción "Quiero innovar en la cama"
    //   const products = [
    //     'https://www.maxx.com.ar/productos/maxx-play-suxx/',
    //     'https://www.maxx.com.ar/productos/maxx-play-aro-vibrador/'
    //   ];
    //   const randomProduct = products[Math.floor(Math.random() * products.length)];
    //   surveyContainer.innerHTML += `
    //         <p>Productos relacionados:</p>
    //         <a href="${randomProduct}" target="_blank">Producto aleatorio 1</a>
    //       `;
    // } 
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
      const randomProduct = prodConocerme[Math.floor(Math.random() * prodConocerme.length)];
      const randomProduct1 = prodRapido[Math.floor(Math.random() * prodRapido.length)];
      const randomProduct2 = prodG[Math.floor(Math.random() * prodG.length)];
      const randomProduct3 = prodReco[Math.floor(Math.random() * prodReco.length)];
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
  `;
    } 
    // else if (choice === 'conocerme') {
    //   // Lógica para la opción "Quiero innovar en la cama"
    //   const products = [
    //     'https://www.maxx.com.ar/productos/maxx-play-vibrador-rabbit/',
    //     'https://www.maxx.com.ar/productos/maxx-play-suxx/',
    //     'https://www.maxx.com.ar/productos/mini-suxx-iu-succionador/'
    //   ];
    //   const randomProduct = products[Math.floor(Math.random() * products.length)];
    //   surveyContainer.innerHTML += `
    //         <p>Productos relacionados:</p>
    //         <a href="${randomProduct}" target="_blank">Producto aleatorio 1</a>
    //       `;
    // } 
    // else if (choice === 'rapido') {
    //   // Lógica para la opción "Quiero innovar en la cama"
    //   const products = [
    //     'https://www.maxx.com.ar/productos/succionador-y-estimulador-pinzas/',
    //     'https://www.maxx.com.ar/productos/maxx-play-mini-suxx-bee-succionador/',
    //     'https://www.maxx.com.ar/productos/maxx-play-suxx/',
    //   ];
    //   const randomProduct = products[Math.floor(Math.random() * products.length)];
    //   surveyContainer.innerHTML += `
    //         <p>Productos relacionados:</p>
    //         <a href="${randomProduct}" target="_blank">Producto aleatorio 1</a>
    //       `;
    // } 
    // else if (choice === 'g') {
    //   // Lógica para la opción "Quiero innovar en la cama"
    //   const products = [
    //     'https://www.maxx.com.ar/productos/maxx-play-g-spot-vibrador-y-masajeador/',
    //     'https://www.maxx.com.ar/productos/vibrador-telescopico/',
    //     'https://www.maxx.com.ar/productos/masajeador-intimo/',
    //   ];
    //   const randomProduct = products[Math.floor(Math.random() * products.length)];
    //   surveyContainer.innerHTML += `
    //         <p>Productos relacionados:</p>
    //         <a href="${randomProduct}" target="_blank">Producto aleatorio 1</a>
    //       `;
    // } 
    // else if (choice === 'recomendame') {
    //   // Lógica para la opción "Quiero innovar en la cama"
    //   const products = [
    //     'https://www.maxx.com.ar/productos/maxx-play-estimulador-clixx/',
    //     'https://www.maxx.com.ar/productos/maxx-play-mini-suxx-bee-succionador/',
    //     'https://www.maxx.com.ar/productos/maxx-play-vibrador-rabbit/',
    //   ];
    //   const randomProduct = products[Math.floor(Math.random() * products.length)];
    //   surveyContainer.innerHTML += `
    //         <p>Productos relacionados:</p>
    //         <a href="${randomProduct}" target="_blank">Producto aleatorio 1</a>
    //       `;
    // }
    // else if (choice === 'pene') {
    //   // Lógica para el camino "Pene"
    //   const products = [
    //     'https://www.maxx.com.ar/productos/copa-masturbadora/',
    //     'https://www.maxx.com.ar/productos/maxx-play-uovo-masturbador-peneano/',
    //   ];
    //   const randomProduct = products[Math.floor(Math.random() * products.length)];
    //   surveyContainer.innerHTML += `
    //         <p>Productos relacionados:</p>
    //         <a href="${randomProduct}" target="_blank">Producto aleatorio 1</a>
    //       `;
    // } 
    else if (choice === 'ano') {
      const prodPrepararme = [
        'https://www.maxx.com.ar/productos/vibrador-telescopico/',
      ];
      const prodEstimulacion = [
        'https://www.maxx.com.ar/productos/maxx-play-plug-baxx/',
      ];
      
      const randomProduct = prodPrepararme[Math.floor(Math.random() * prodPrepararme.length)];
      const randomProduct1 = prodEstimulacion[Math.floor(Math.random() * prodEstimulacion.length)];
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
  `;
    } 
    // else if (choice === 'prepararme') {
    //   const products = [
    //     'https://www.maxx.com.ar/productos/vibrador-telescopico/',
    //   ];
    //   const randomProduct = products[Math.floor(Math.random() * products.length)];
    //   surveyContainer.innerHTML += `
    //         <p>Productos relacionados:</p>
    //         <a href="${randomProduct}" target="_blank">Producto aleatorio 1</a>
    //       `;
    // } else if (choice === 'estimulacion') {
    //   const products = [
    //     'https://www.maxx.com.ar/productos/maxx-play-plug-baxx/',
    //   ];
    //   const randomProduct = products[Math.floor(Math.random() * products.length)];
    //   surveyContainer.innerHTML += `
    //         <p>Productos relacionados:</p>
    //         <a href="${randomProduct}" target="_blank">Producto aleatorio 1</a>
    //       `;
    // }
  }