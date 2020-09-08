import express from "express";

const routes = express.Router();

// Retorna lista de Usuários.
routes.get("/", (request, response) => {
  return response.json();
});

export default routes;
