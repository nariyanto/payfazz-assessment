import http from "http";
import express from "express";
import { applyMiddleware } from "./utils";
import middleware from "./middleware";
import errorHandlers from "./middleware/errorHandlers";
import { Routes } from "./routes";

process.on("uncaughtException", e => {
  console.log(e);
  process.exit(1);
});

process.on("unhandledRejection", e => {
  console.log(e);
  process.exit(1);
});

const app = express();
applyMiddleware(middleware, app);

const routes = new Routes();
routes.routes(app);

applyMiddleware(errorHandlers, app);

const { PORT = 3000 } = process.env;

export const server = async () => {
  await app.listen(PORT);
  console.log(`Server started at http://localhost:${PORT}`);
  console.log(`Press Ctrl+C to quit`);
};