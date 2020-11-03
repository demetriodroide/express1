const express = require('express');
const bodyParser = require('body-parser');

const server = express();
const listenPort = 8080;


const staticFilesPath = express.static('public');
server.use(staticFilesPath);

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());



/////////////////////////////////


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


    //////////////////////

    //apiresty

    server.get('/loadNoticias', (req, res) => {

        //codigo de firebase neceasrio 

        res.send(noticias);
    });

    server.listen(listenPort, () => console.log(`Server listening on ${listenPort}`));


