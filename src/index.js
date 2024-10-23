import { app } from "./app.js";
import config from "./config/setting.js";

const { PORT } = config;

const serve = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${serve.address().port} `);
});
