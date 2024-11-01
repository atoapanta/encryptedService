import express from "express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();
app.use(express.json());

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Example",
      version: "1.0.0",
    },
  },
  apis: ["./src/index.js"], // path where API docs are defined
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Sample endpoint
/**
 * @swagger
 * /:
 *   get:
 *     description: Returns a simple message.
 *     responses:
 *       200:
 *         description: A successful response
 */
app.get("/", (req, res) => {
  res.json({ message: "API On" });
});

export { app };
