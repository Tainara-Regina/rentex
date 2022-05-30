// aqui eu instancio tudo o que preciso
// e exporto tudo pra pegar na rota

import { CategoriesRepository } from "../../repositores/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./listCategoriesUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

export { listCategoriesController }