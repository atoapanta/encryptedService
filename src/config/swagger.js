import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import setting from "../config/setting.js";

// URL del CSS de Swagger desde CDN
const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.3.0/swagger-ui.min.css";

const { URL } = setting;

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Example Asymmetric Cryptography",
      version: "1.0.0",
      description:
        "API documentation for the example application Asymmetric Cryptography",
    },
    servers: [
      {
        url: `${URL}/encrypted-service`,
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export default (app) => {
  app.use(
    "/encrypted-service",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocs, {
      customCssUrl: CSS_URL,
    })
  );
};
