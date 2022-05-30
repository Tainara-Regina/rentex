import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
const specificationRoute = Router();

specificationRoute.post("/",(req, res) => {
    createSpecificationController.handle(req,res)
})

export { specificationRoute }