import express from "express";
import knex from "./database/connection";

const routes = express.Router();

// Listar itens de coleta
routes.get("/items", async (request, response) => {
  const items = await knex("items").select("*");
  const serializedItems = items.map((item) => {
    return {
      id: item.id,
      name: item.title,
      image_url: `http://localhost:3333/uploads/${item.image}`,
    };
  });
  return response.json(serializedItems);
});

// TODO: Cadastrar pontos de coleta
routes.post("/points", async (request, response) => {
  const {
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
    items,
  } = request.body;

  const trx = await knex.transaction();

  const insertedIds = await trx("points").insert({
    image: "image-fake",
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
  });

  const point_id = insertedIds[0];

  const pointItems = items.map((item_id: number) => {
    return { item_id, point_id };
  });
  await trx("points_items").insert(pointItems);

  return response.json({ success: true });
});
// TODO: listar ponto de coleta especifico
// TODO: listar pontos (Filtro por estado/cidade)
export default routes;