import { ISpecificationRepository } from "../../repositores/ISpecificationRepository";


interface IRequest {
    name:string
    description: string
}

class CreateSpecificationUseCase {
    constructor(private specificationRepository: ISpecificationRepository){}

    execute({name, description}: IRequest): void{
        const specification = this.specificationRepository.findByName(name)
        // para pessistir, preciso ver se não existe uma especificação com o mesmo nome
        // se existir eu retorno um erro
        if(specification){
            throw new Error("specificatiorn aready exist!")
        }
        // se não existir eu chamo o create
        this.specificationRepository.create({name,description})

    }

}

export { CreateSpecificationUseCase }