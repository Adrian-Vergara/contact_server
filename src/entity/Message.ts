
//Nuestra clase Message nos permite tener un número de mensajes estandar que usaremos para retornar respuestas de nuestras apis
export default class Message {
    public empty_fields:string = "Verifique que haya diligenciado todos los campos.";
    public register:string = "Datos almacenados exitosamente.";
    public error_register:string = "No se pudieron almacenar los datos, por favor intente nuevamente.";
    public error_user:string = "El usuario no está autorizado para realizar la solicitud.";
    public error_query:string = "No se encuentran datos almacenados en el sistema.";
    public update:string = "Datos actualizados exitosamente.";
    public error_update:string = "No se pudieron actualizar los datos,intente nuevamente.";
    public delete:string = "Datos eliminados exitosamente.";
    public error_delete:string = "No se pudieron eliminar los datos, intente nuevamente.";
    public error_update_individual_m:string = "que desea actualizar no se encuentra registrado en el sistema.";
    public error_update_individual_f:string = "que desea actualizar no se encuentra registrada en el sistema.";
    public error_delete_individual_m:string = "que desea eliminar no se encuentra registrado en el sistema.";
    public error_delete_individual_f:string = "que desea eliminar no se encuentra registrada en el sistema.";
    public empty_value: string = 'Verifique que haya diligenciado el campo {field}';
    public count_character: string = 'Verifique que el campo {field} no exceda los {length} caracteres permitidos';
}
