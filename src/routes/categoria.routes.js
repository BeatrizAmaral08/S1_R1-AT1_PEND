import { Router } from "express";
import categoriaController from "../controllers/controller.js";
const categoriaRoutes = Router();

categoriaRoutes.post('/categoria', produtoController.criarCategoria);
categoriaRoutes.get('/categoria', produtoController.listarCategoria);

export default categoriaRoutes;