import express, { response } from "express";

import routes from "./routes";

const app = express();

// Usa json on express.
app.use(express.json());
// Usa rotas do arquivo ./routes
app.use(routes);
// Escuta a porta 3333
app.listen(3333);
