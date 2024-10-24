import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import cors from "cors";

// Import swagger configuration
import setupSwagger from "./config/swagger.js";

//Import routes
import EncryptedRoute from "./routes/EncryptedRoute.js";
import { corsConfig, limiter } from "./lib/helpers.js";

const app = express();

//Middlewares
app.use(helmet());
app.use(morgan("combined"));
app.set("trust proxy", 1);
app.use(compression());
app.use(limiter);
app.use(cors(corsConfig));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' https://vercel.live; style-src 'self' https://encrypted-service.vercel.app"
  );
  next();
});

app.use(
  express.static("public", {
    setHeaders: (res, path) => {
      if (path.endsWith(".css")) {
        res.set("Content-Type", "text/css");
      } else if (path.endsWith(".js")) {
        res.set("Content-Type", "application/javascript");
      }
    },
  })
);

//Routes
app.use("/encrypted-service/api/V1", EncryptedRoute);

//Config Swagger
setupSwagger(app);

export { app };
