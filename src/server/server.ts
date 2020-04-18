//importamos las librerías que necesitamos para levantar el servidor y las variables de entorno
import express = require("express");
import http from "http"
import socketIO from 'socket.io';
import {SERVER_PORT} from "../enviroments/enviroments";

//exportamos la clase server por defecto
export default class Server {

    //creamos una variable estática que será la instancia de la clase server usando el patrón de diseño singleton
    private static _instance: Server;
    //declaramos una variable app de tipo Application express
    public app: express.Application;
    //declaramos una variable para el puerto
    public port: number;

    //declaramos una variable de tipo Server de socketIo para el uso de web sockets
    public io: socketIO.Server;
    //declaramos una variable de tipo htttp server para configurar el servidor
    private httpServer: http.Server;

    constructor() {
        //inicializamos todas las variables en el constructor
        this.port = SERVER_PORT;
        this.app = express();
        this.httpServer = new http.Server(this.app);
        this.io = socketIO(this.httpServer);
    }

    //declaramos un getter para retornar la instancia del patron singleton de la clase server
    public static get intance(){
        return this._instance || (this._instance = new this());
    }

    //hacemos el levantamiento del servidor, recibimos un callback tipo función para realizar alguna acción cuando se levante el servidor, es opcional
    start(callback: Function){
        // @ts-ignore
        this.app.listen(this.port, callback);
    }

}
