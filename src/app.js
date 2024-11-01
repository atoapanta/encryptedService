import express from "express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();
app.use(express.json());

// Configuración de Swagger
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Example",
      version: "1.0.0",
      description: "Documentación de la API usando Swagger",
    },
  },
  apis: ["./src/swagger.js"], // Ruta donde se definen las APIs
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Endpoint de ejemplo
/**
 * @swagger
 * /:
 *   get:
 *     summary: Devuelve un mensaje simple.
 *     responses:
 *       200:
 *         description: Respuesta exitosa.
 */
app.get("/", (req, res) => {
  res.json({ message: "API On" });
});

// Otro endpoint para demostrar Swagger
/**
 * @swagger
 * /message:
 *   get:
 *     summary: Obtiene un mensaje.
 *     responses:
 *       200:
 *         description: Mensaje obtenido exitosamente.
 */
app.get("/message", (req, res) => {
  res.json({ message: "Hello from the API!" });
});
export { app };
