import express from "express";
import swaggerUi from "swagger-ui-dist"; // Importa swagger-ui-dist
import path from "path";

const app = express();
app.use(express.json());

// Ruta para servir la documentación Swagger
app.use("/api-docs", express.static(swaggerUi.getAbsoluteFSPath()));

// Define tu especificación OpenAPI (puedes cargarla desde un archivo o definirla aquí)
const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "API Example",
    version: "1.0.0",
  },
  paths: {
    "/": {
      get: {
        summary: "Returns a simple message.",
        responses: {
          200: {
            description: "A successful response",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: { type: "string" },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

// Endpoint para servir el swagger.json (especificación)
app.get("/api-docs/swagger.json", (req, res) => {
  res.json(swaggerDocument);
});

export { app };
