// recebe o request response
// chamar o use case (antigo service) e passa este request
// tambeme esta faltando o principio de DIP

import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./listCategoriesUseCase";

class ListCategoriesController {

constructor (private listCategoriesUseCase: ListCategoriesUseCase){}

    handle (req: Request, res: Response) {
       const all = this.listCategoriesUseCase.execute();
       return res.status(200).json(all);
}
}
export { ListCategoriesController }