const noticias = [
    {
        "titulo" :        "la mega fiesta",
        "descripcion":    "de 150 personas mas popular del verano"
    },
    
    {
        "titulo" :        "el español",
        "descripcion":    "asesino a un soldado aleman"
    },
    
    {
        "titulo" :        "la fabrika",
        "descripcion":    "textil donde trabajan muchas personas"
    },
    
    {
        "titulo" :        "la fabrika",
        "descripcion":    "textil donde trabajan muchas personas"
    }
    ];

    //////////////////////////////


const http = require('http');
const listenport = 8080;
const server = http.createServer((request,response) => {
   if(request.url == "/sayHello") {
       response.writeHead(200, {"content-type" : "text/plain"});
       response.write("Hello");
   }
    response.end();
});
server.listen(listenport);
console.log("server running")


/////////////////////////////////

let defaultDatabase = firebase.database();
// ruta a la base de datos
let noticiasRef = defaultDatabase.ref("noticias");

noticiasRef.on('value', function(snapshot) {
  let noticias = Object.values( snapshot.val() );
  
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