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

// listar pontos (Filtro por estado/cidade)
routes.get("/points", pointsController.index);
// Cadastrar pontos de coleta
routes.post("/points", pointsController.create);
// listar ponto de coleta especifico
routes.get("/points/:id", pointsController.show);

export default routes;
