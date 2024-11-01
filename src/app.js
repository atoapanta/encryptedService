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
  apis: ["./src/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /api/V1/encrypted:
 *   post:
 *     summary: Encrypt data
 *     description: Encrypts the provided data using a public key and returns the encrypted key and JWT.
 *     tags:
 *       - Encrypted data endpoint
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data:
 *                 type: object
 *                 description: The data to be encrypted.
 *                 example:
 *                   {
 *                     "name": "Alexander Dev",
 *                     "email": "xander.dev@example.com"
 *                   }
 *     responses:
 *       200:
 *         description: Successfully encrypted the data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 jwt:
 *                   type: string
 *                   description: The encrypted JWT token.
 *                 encryptedKey:
 *                   type: string
 *                   description: The encrypted symmetric key used for encryption.
 *       500:
 *         description: Internal server error.
 */
app.get("/", (req, res) => {
  res.json({ message: "API On" });
});

export { app };
