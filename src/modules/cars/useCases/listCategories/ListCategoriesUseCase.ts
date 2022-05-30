import { Category } from "../../models/Category";
import { ICategoriesRepository } from "../../repositores/implementations/ICategoriesRepository";

class ListCategoriesUseCase {
constructor (private categoriesrepository: ICategoriesRepository) {}
    execute(): Category[]{
    const all = this.categoriesrepository.list();
    return all;

    }
}

export { ListCategoriesUseCase }