import express from "express";
import knex from "./database/connection";

const routes = express.Router();

// Listar itens de coleta
routes.get("/items", async (request, response) => {
  const items = await knex("items").select("*");
  const serializedItems = items.map((item) => {
    return {
      name: item.title,
      image_url: `http://localhost:3333/uploads/${item.image}`,
    };
  });
  return response.json(serializedItems);
});

// TODO: Cadastrar pontos de coleta
// TODO: listar ponto de coleta especifico
// TODO: listar pontos (Filtro por estado/cidade)
export default routes;
