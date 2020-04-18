

//Nuestra clase response contiene una estructura estandar para retornar la respuesta de nuestras apis
export default class Response {
    public error: boolean = false;
    public message: String = '';
    public content: any = {};
}
