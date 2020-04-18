//importamos Response y Request de express
import {Response, Request} from "express";
//importamos nuestra clase ContactRepository en la que manejaremos la lógica
import ContactRepository from "../repositories/ContactRepository";

//instanciamos nuestro contactRepository
const contactRepository = new ContactRepository();

//declaramos un método async y hacemos uso del await para retornar la respuesta del método save de nuestro ContactRepository
export const getAll = async (req: Request, res: Response): Promise<Response> => {
    return res.json(
        await contactRepository.getAll()
    );
};

//declaramos un método async y hacemos uso del await para retornar la respuesta del método save de nuestro ContactRepository
export const save = async (req: Request, res: Response): Promise<Response> => {
    const data = req.body;
    return res.json(
        await contactRepository.save(data)
    );
};
