import { Specification } from "../models/Specification";
import { ISpecificationRepository, ISpecificationDTO } from "./implementations/ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {

    private specification: Specification[];

    constructor() {
        this.specification = [];
    }


    create({ name, description }: ISpecificationDTO): void {
       //[x] - aqui vou instanciar um modelo da Specification
       //[x] - popular todos os atributos dele e depois perssistir no atributo da classe specification
       const repositores = new Specification;
       Object.assign(repositores, {
            name,
            description,
            created_at: new Date()
         }
        )

        this.specification.push(repositores)

    }
    findByName(name: string): Specification {
        // procuro o nome da categoria e retorno se tiver
        const specification = this.specification.find(specification => specification.name === name )
        return specification
    }
    list(): Specification[] {
        return this.specification;
    }

}

export { SpecificationRepository}