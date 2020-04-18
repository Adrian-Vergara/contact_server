//Definición de nuestras variables de entorno
export const SERVER_PORT: number = Number(process.env.SERVER_PORT) || 3000;

export const SECRET_KEY: String = process.env.SECRET_KEY || "secret-key-mmi-surveys";

export const EXPIRES_IN: number = Number(process.env.EXPIRES_IN) || 60*60*24*30;
