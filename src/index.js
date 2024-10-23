import { app } from "./app.js";
import config from "./config/setting.js";

const { PORT } = config;

const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${server.address().port} `);
});
