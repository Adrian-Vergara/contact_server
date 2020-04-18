//utilizamos el getRepository para extraer la instancia del repositorio de nuestra entidad Contact
import {getRepository} from "typeorm";
import Message from "../entity/Message";
import Response from "../entity/Response";
import {Contact} from "../entity/Contact";
import {SECRET_KEY, EXPIRES_IN} from "../enviroments/enviroments";

//Importamos las librerías con las que encriptaremos password y generaremos nuestro token de autenticación
import bcrypt = require("bcrypt");
import jwt = require("jsonwebtoken");

//Creamos nuestra clase Repository para la entidad Contact, aquí manejaremos toda nuestra lógica
export  default class ContactRepository {

    //declaración de nuestra variable message
    private message: Message;

    constructor() {
        //inicializamos message
        this.message = new Message();
    }

    //declaramos nuestro getter entity con el que extraeremos la instancia del repository de Contact (esto es propio de typeOrm)
    private  get entity(){
        return getRepository(Contact);
    }

    public async getAll(): Promise<Response>{
        let response = new Response();
        //consultamos todos los contactos con el método find de typeOrm
        const contacts = await this.entity.find();
        //Si tiene datos entonces retornamos error = false y el array de contactos en el content de la clase Response
        if (contacts.length > 0) {
            response.error = false;
            response.content = contacts;
        } else {
            //si no tiene datos, entonces retornamos error = true un mensaje de la clase message y content = []
            response.error = true;
            response.message = this.message.error_query;
            response.content = [];
        }
        //recuerden siempre retornar una sola respuesta
        return response;
    }

    public async save(data:any): Promise<Response>{
        //declaración de una instancia de nuestra clase Response con la que retornaremos una estructura estandar en la respuesta de nuestras apis
        const response = new Response();
        try{
            //modificamos el valor de nuestro password que viene en el objeto data con bcrypt para encriptar la contraseña
            data.password = bcrypt.hashSync(data.password, 4);
            //creamos una instancia de nuestra entidad Contact utilizando el objeto data que viene en la solicitud
            let contact = this.entity.create(data);
            //hacemos la operación para registrar la información y almacenamos el resultado de nuestra insersión
            const insert = await this.entity.save(contact);
            //si se registró la información entonces procedemos a generar el token
            if(insert){
                //generamos el token
                let token = jwt.sign({ contact }, SECRET_KEY.toString(), { expiresIn: EXPIRES_IN });
                response.error = false;
                response.message = this.message.register;
                response.content.contact = contact;
                response.content.token = token;
            }
            else{
                //si no se registró la información retornamos un error = true y un message de nuestra clase Message
                response.error = true;
                response.message = this.message.error_register;
            }
        }catch (e) {
            //si ocurre un error, controlamos con un catch para que nuestro servidor no se caiga
            response.error = true;
            response.message = this.message.error_register;
            response.content = e;
        }
        //siempre se debe hacer 1 solo return por método, nosotros retornamos nuestra clase response
        return response;
    }

}
