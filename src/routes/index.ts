import { Router } from "express";
import { categoriesRoutes } from "./categories.route";
import { specificationRoute } from "./specification.route";

const router = Router();
router.use("/categories",categoriesRoutes);
router.use("/specifications",specificationRoute);

export { router }
