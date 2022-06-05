// eu faço a regra de negocio da importação.
// recebo o arquivo que o controller esta me dando generosamente
// e trato ele, mas por enquanto só vou fazer um console.log
import fs from "fs";
import { parse as csvParse} from "csv-parse"
import { ICategoriesRepository } from "../../repositores/ICategoriesRepository";

interface IImportCategory {
   name: string;
   description: string;
}

class ImportCategoryUseCase {
 constructor(private categoriesRepository: ICategoriesRepository){}
 
 loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
  return new Promise((resolve, reject) => {
   const stream = fs.createReadStream(file.path);
   const categories: IImportCategory[] = [];

       const parseFile = csvParse();
       stream.pipe(parseFile);

       parseFile.on("data", async (Line) => {
          const [name, description] = Line;
           categories.push({
             name,
             description
          });
       }).on("end", () => {
          fs.promises.unlink(file.path);
          resolve(categories);
       })
       .on("error", (err) => {
            reject(err);
       })
  });
 }
 
 
 async execute(file: Express.Multer.File): Promise<void>{
       const categories = await this.loadCategories(file);
     
       categories.map(category => {
         const { name, description } = category;
         
         const existCategory = this.categoriesRepository.findByName(name);

         if(!existCategory){
            this.categoriesRepository.create({
               name,description
            })
         }
       })
    }
}

export { ImportCategoryUseCase }