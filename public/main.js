//noticiasRef.on('value', function(snapshot) {
  //  let noticias = Object.values( snapshot.val() );
    
    for ( let i = 0; i < noticias.length; i++){
  
      let caja = document.createElement("div");
      caja.className = "titudescri";
      document.querySelector("body").appendChild(caja);
      
      let titulo = document.createElement("h1");
      caja.appendChild(titulo);
      titulo.innerText = noticias[i].titulo;
      
      
      let descripcion = document.createElement("h2");
      caja.appendChild(descripcion);
      //document.querySelector(".titudescri").appendChild(descripcion);
      descripcion.innerText = noticias[i].descripcion;
      
      }
  
  });
  

  /*
  document
    .getElementById("cargaPokemonBtn")
    .addEventListener("click", () => {
      fetch('https://pokeapi.co/api/v2/pokemon/charizard')
        .then(resp => resp.json())
        .then(data => {
  
          document.getElementById("namePokemon").innerText = data.name;
  
          data.abilities.map(item => document.write(item.ability.name));
        })
        .catch(() => console.log("La URL está mal"));
    });
  
    <button id="cargaPokemonBtn">Dame Pokemon</button>
  
    <div id="namePokemon"></div>

    */