import { ICategoriesRepository } from "../../repositores/ICategoriesRepository";

interface IRequest{
    name: string;
    description: string;
}

class CreateCategoryUseCase {
//recebe um objeto instanciado de CategoriesRepository
 constructor(private categoriesRepository: ICategoriesRepository){}

    execute({name,description}:IRequest): void {
        const categoryAlreadyExist = this.categoriesRepository.findByName(name);

        if(categoryAlreadyExist){
            throw new Error("category aready Exist!")
        }

        this.categoriesRepository.create({name,description});

   
    }
}

export {CreateCategoryUseCase}