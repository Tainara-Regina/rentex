// recebo as requisiçoes mando pro use case processar e devolvo ela
// lembrando: não devo instanciar classes aqui dentro de acordo com o Principio de inversão de dependencia
import { Request, Response } from "express"
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase"

class CreateSpecificationController {
    constructor (private createSpecificationUseCase : CreateSpecificationUseCase) {}

    handle(req: Request, res: Response) {
    const {name, description } = req.body

    this.createSpecificationUseCase.execute({name,description})
    
    return res.status(201).send();

    }
}

export { CreateSpecificationController }