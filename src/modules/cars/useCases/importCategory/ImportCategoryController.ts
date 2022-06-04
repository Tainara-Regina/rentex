// rota me chama e passa os parametros necessarios para serem utilizados na regra de negocio
// eu chamo o service (Use Case) e passo os parametros, que é onde tem a regra de negocio.
// eu repasso a resposta do Use Case pra rota

import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
    constructor (private importCategoryUseCase: ImportCategoryUseCase) {}
   
    handle(req: Request, res: Response) {
        const { file } = req;
        this.importCategoryUseCase.execute(file);

        res.status(200).send();
    }
}

export { ImportCategoryController }