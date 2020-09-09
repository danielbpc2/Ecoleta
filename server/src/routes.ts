import express from "express";
import knex from "./database/connection";

// Controllers
import PointsController from "./controllers/pointsController";
import ItemsController from "./controllers/itemsController";
// Controllers Instances
const pointsController = new PointsController();
const itemsController = new ItemsController();

const routes = express.Router();

// Listar itens de coleta
routes.get("/items", itemsController.index);

// Cadastrar pontos de coleta
routes.post("/points", pointsController.create);

// TODO: listar ponto de coleta especifico
// TODO: listar pontos (Filtro por estado/cidade)
export default routes;
