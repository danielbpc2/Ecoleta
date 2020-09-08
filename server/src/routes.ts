import express from "express";

const routes = express.Router();

routes.get("/", (request, response) => {
  return response.json();
});

// TODO: Cadastrar pontos de coleta
// TODO: Listar itens de coleta
// TODO: listar pontos (Filtro por estado/cidade)
export default routes;
