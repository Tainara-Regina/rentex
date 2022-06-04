// eu faço a regra de negocio da importação.
// recebo o arquivo que o controller esta me dando generosamente
// e trato ele, mas por enquanto só vou fazer um console.log

class ImportCategoryUseCase {
    execute(file: Express.Multer.File): void {
        console.log(file)
    }
}

export { ImportCategoryUseCase }