function next(choice) {
    const surveyContainer = document.getElementById('survey-container');
  
    if (choice === 'pareja') {
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
          <button onclick="next('pene_pene')">
            <img src="icons/pene-pene.png" class="x2">
            <p>Pene Pene</p>
          </button>
          </div>
        `;
    } else if (choice === 'solas') {
      // Lógica para la opción "A solas"
      surveyContainer.innerHTML = `
          <h1>Encuesta</h1>
          <p>Seleccionaste: A solas</p>
          <div id="btns">
          <button onclick="next('vulva')">
            <img src="icons/vulva.png">
            <p>Vulva</p>
          </button>
          <button onclick="next('pene')">
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
      surveyContainer.innerHTML = `
        <h1>Encuesta</h1>
        <p>Seleccionaste: Vulva Pene</p>
        <div id="btns">
        <button onclick="next('innovar')">
          <img src="icons/innovar-cama.png">
          <p>Quiero innovar en la cama</p>
        </button>
        <button onclick="next('distancia')">
          <img src="icons/distancia-2.png">
          <p>Quiero jugar a distancia</p>
        </button>
        <button onclick="next('orgasmos')">
          <img src="icons/placer-penetracion.png">
          <p>Quiero tener más orgasmos durante la penetración</p>
        </button>
        <button onclick="next('anal')">
          <img src="icons/placer-anal.png">
          <p>Quiero placer anal</p>
        </button>
        </div>
      `;
    } else if (choice === 'vulva_vulva') {
      // Lógica para el camino "Vulva Pene"
      surveyContainer.innerHTML = `
          <h1>Encuesta</h1>
          <p>Seleccionaste: Vulva Vulva</p>
          <div id="btns">
          <button onclick="next('penetracion')">
          <img src="icons/dildo.png">
            <p>Quiero juguete con penetracion</p>
          </button>
          <button onclick="next('distancia')">
          <img src="icons/distancia-2.png">
            <p>Quiero jugar a distancia</p>
          </button>
          <button onclick="next('versatil')">
            <img src="icons/versatil.png">
            <p>Quiero un juguete versátil</p>
          </button>
          </div>
  `;
    } else if (choice === 'pene_pene') {
      const products = [
  
        'https://www.maxx.com.ar/productos/vibrador-telescopico/',
        'https://www.maxx.com.ar/productos/copa-masturbadora/'
      ];
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      surveyContainer.innerHTML += `
            <p>Productos relacionados:</p>
            <a href="${randomProduct}" target="_blank">Producto aleatorio 1</a>
          `;
    } else if (choice === 'penetracion') {
      const products = [
        'https://www.maxx.com.ar/productos/maxx-play-vibrador-rabbit/',
        'https://www.maxx.com.ar/productos/maxx-play-suxx/'
      ];
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      surveyContainer.innerHTML += `
            <p>Productos relacionados:</p>
            <a href="${randomProduct}" target="_blank">Producto aleatorio 1</a>
          `;
    } else if (choice === 'versatil') {
      const products = [
        'https://www.maxx.com.ar/productos/succionador-y-estimulador-pinzas/',
        'https://www.maxx.com.ar/productos/maxx-play-estimulador-clixx/'
      ];
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      surveyContainer.innerHTML += `
            <p>Productos relacionados:</p>
            <a href="${randomProduct}" target="_blank">Producto aleatorio 1</a>
          `;
    } else if (choice === 'innovar') {
      // Lógica para la opción "Quiero innovar en la cama"
      const products = [
        'https://www.maxx.com.ar/productos/succionador-y-estimulador-pinzas/',
        'https://www.maxx.com.ar/productos/maxx-play-estimulador-clixx/'
      ];
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      surveyContainer.innerHTML += `
            <p>Productos relacionados:</p>
            <a href="${randomProduct}" target="_blank">Producto aleatorio 1</a>
          `;
    } else if (choice === 'distancia') {
      // Lógica para la opción "Quiero innovar en la cama"
      const products = [
        'https://www.maxx.com.ar/productos/vibrador-telescopico/',
        'https://www.maxx.com.ar/productos/maxx-play-estimulador-clixx/'
      ];
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      surveyContainer.innerHTML += `
            <p>Productos relacionados:</p>
            <a href="${randomProduct}" target="_blank">Producto aleatorio 1</a>
          `;
    } else if (choice === 'anal') {
      // Lógica para la opción "Quiero innovar en la cama"
      const products = [
        'https://www.maxx.com.ar/productos/maxx-play-plug-baxx/',
        'https://www.maxx.com.ar/productos/vibrador-telescopico/'
      ];
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      surveyContainer.innerHTML += `
            <p>Productos relacionados:</p>
            <a href="${randomProduct}" target="_blank">Producto aleatorio 1</a>
          `;
    } else if (choice === 'orgasmos') {
      // Lógica para la opción "Quiero innovar en la cama"
      const products = [
        'https://www.maxx.com.ar/productos/maxx-play-suxx/',
        'https://www.maxx.com.ar/productos/maxx-play-aro-vibrador/'
      ];
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      surveyContainer.innerHTML += `
            <p>Productos relacionados:</p>
            <a href="${randomProduct}" target="_blank">Producto aleatorio 1</a>
          `;
    } else if (choice === 'vulva') {
      // Lógica para el camino "Vulva"
      surveyContainer.innerHTML = `
      <h1>Encuesta</h1>
      <p>Seleccionaste: Vulva</p>
      <div id="btns">
      <button onclick="next('conocerme')">
        <img src="icons/explorar.png">
        <p>Explorar y conocerme</p>
      </button>
      <button onclick="next('rapido')">
        <img src="icons/rapido.png">
        <p>Quiero conseguir un orgasmo rapido</p>
      </button>
      <button onclick="next('g')">
          <img src="icons/g.png">
          <p>Encontrar mi punto - g</p>
      </button>
      <button onclick="next('recomendame')">
        <img src="icons/recomendar.png">
        <p>No tengo algo definido, recomendame algo</p>
      </button>
      </div>
  `;
    } else if (choice === 'conocerme') {
      // Lógica para la opción "Quiero innovar en la cama"
      const products = [
        'https://www.maxx.com.ar/productos/maxx-play-vibrador-rabbit/',
        'https://www.maxx.com.ar/productos/maxx-play-suxx/',
        'https://www.maxx.com.ar/productos/mini-suxx-iu-succionador/'
      ];
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      surveyContainer.innerHTML += `
            <p>Productos relacionados:</p>
            <a href="${randomProduct}" target="_blank">Producto aleatorio 1</a>
          `;
    } else if (choice === 'rapido') {
      // Lógica para la opción "Quiero innovar en la cama"
      const products = [
        'https://www.maxx.com.ar/productos/succionador-y-estimulador-pinzas/',
        'https://www.maxx.com.ar/productos/maxx-play-mini-suxx-bee-succionador/',
        'https://www.maxx.com.ar/productos/maxx-play-suxx/',
      ];
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      surveyContainer.innerHTML += `
            <p>Productos relacionados:</p>
            <a href="${randomProduct}" target="_blank">Producto aleatorio 1</a>
          `;
    } else if (choice === 'g') {
      // Lógica para la opción "Quiero innovar en la cama"
      const products = [
        'https://www.maxx.com.ar/productos/maxx-play-g-spot-vibrador-y-masajeador/',
        'https://www.maxx.com.ar/productos/vibrador-telescopico/',
        'https://www.maxx.com.ar/productos/masajeador-intimo/',
      ];
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      surveyContainer.innerHTML += `
            <p>Productos relacionados:</p>
            <a href="${randomProduct}" target="_blank">Producto aleatorio 1</a>
          `;
    } else if (choice === 'recomendame') {
      // Lógica para la opción "Quiero innovar en la cama"
      const products = [
        'https://www.maxx.com.ar/productos/maxx-play-estimulador-clixx/',
        'https://www.maxx.com.ar/productos/maxx-play-mini-suxx-bee-succionador/',
        'https://www.maxx.com.ar/productos/maxx-play-vibrador-rabbit/',
      ];
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      surveyContainer.innerHTML += `
            <p>Productos relacionados:</p>
            <a href="${randomProduct}" target="_blank">Producto aleatorio 1</a>
          `;
    }
    else if (choice === 'pene') {
      // Lógica para el camino "Pene"
      const products = [
        'https://www.maxx.com.ar/productos/copa-masturbadora/',
        'https://www.maxx.com.ar/productos/maxx-play-uovo-masturbador-peneano/',
      ];
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      surveyContainer.innerHTML += `
            <p>Productos relacionados:</p>
            <a href="${randomProduct}" target="_blank">Producto aleatorio 1</a>
          `;
    } else if (choice === 'ano') {
      const productPrepararme = [
        'https://www.maxx.com.ar/productos/vibrador-telescopico/',
      ];
      const productEstimulacion = [
        'https://www.maxx.com.ar/productos/maxx-play-plug-baxx/',
      ];
      const randomProduct = productPrepararme[Math.floor(Math.random() * productPrepararme.length)];
      const randomProduct1 = productEstimulacion[Math.floor(Math.random() * productEstimulacion.length)];
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