//Importamos las librerías que nos especifica typeOrm
import "reflect-metadata";
import {createConnection} from "typeorm";
import {Contact} from "../entity/Contact";

export default class Connection {

    //Inicializamos el método initiDB en el constructor para conectar a la db y ejecutar las migraciones
    constructor() {
        this.initDb();
    }

    public initDb(){
        createConnection({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "",
            database: "db_contacts",
            entities: [
                Contact
            ],
            synchronize: true,
            logging: false
        }).then(connection => {
            // here you can start to work with your entities
            console.log("migración creada");
        }).catch(error => console.log(error));
    }
}
