import cors from 'cors';
import bodyParser from 'body-parser';
import Connection from "./connection/app";
import Server from "./server/server";
import router from "./router/router";

//Se instancia la conexión para que se ejecuten las migraciones
const connection = new Connection();
//se crea una instancia de la clase server para levantar el servidor
const server = Server.intance;

//hacemos uso del middleware cors para permitir el consumo de apis desde orígenes desconocidos
server.app.use(cors({origin: true, credentials: true}));
//hacemos la inclusión del bodyParser para aceptar solicitudes en formato json y urlencoded
server.app.use(bodyParser.json()); //reciba datos de tipo json
server.app.use(bodyParser.urlencoded({extended: true})); //reciba datos de tipo json

//pasamos el paquete de apis
server.app.use(router);


//levantamos el servidor
server.start( () => {
    console.log(`el servidor está corriendo por el puerto 3000`);
} );
