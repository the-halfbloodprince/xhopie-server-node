import { Application } from "express";
import router from "./routes";

export default function initialize(app: Application) {
  app.use('/store', router)

  console.info('[STORE] Store feature initialized')
}