import imagemController from "../controllers/imagem.controller.js";
import uploadImage from "../middlewares/uploadImage.midleware.js";
import uploadFile from "../middlewares/uploadDocuments.middleware.js";
import { Router } from "express";

const imagemRoutes= Router();

imagemRoutes.post('/produtos/imagens', uploadImage, imagemController.upload);
imagemRoutes.post('/produtos/docs', uploadFile, imagemController.upload);

export default imagemRoutes