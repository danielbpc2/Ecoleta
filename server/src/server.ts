import express, { response } from "express";
import path from "path";
import routes from "./routes";

const app = express();

// Usa json on express.
app.use(express.json());
// Usa rotas do arquivo ./routes
app.use(routes);
// Utiliza a pasta de uploads
app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));
// Escuta a porta 3333
app.listen(3333);
