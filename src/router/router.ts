//instanciamos el módulo Router propio de express
import {Router} from "express";
//utilizamos el destructuring (concepto propio del es5+)
import {getAll, save} from "../controllers/ContactController";

//creamos una instancia del módulo router
const router = Router();

//creamos nuestro enrutado contacts con el método get y pasamos como segundo parámetro el método de nuestro controlador
router.get("/contacts", getAll);

//creamos nuestro enrutado contacts con el método post y pasamos como segundo parámetro el método de nuestro controlador
router.post("/contacts", save);

export default router;
