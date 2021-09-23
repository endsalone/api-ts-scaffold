import { log } from "console";
import express, {Express, NextFunction, Request, Response} from "express";
import helmet from "helmet";
import { Server } from "http";

import config from "config/Values";

export class App {
  private _server: Server;
  private readonly _app: Express;
  private static _instance: App;

  private config() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(helmet());
    this.app.disable('x-powered-by');
    this.app.set("port", config.port);
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Credentials", "true");
      res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
      res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
      res.setHeader("Content-Type", "application/json");
      res.type("json")
      next();
    });
  }

  private constructor() {
    this._app = express();
    this.config();
  }

  public static get instance(): App {
    return this._instance || (this._instance = new App());
  }

  get server(): Server {
    return this._server;
  }

  get app(): Express {
    return this._app;
  }

  start() {
    const port: number = this.app.get("port");

    this._server = this.app.listen(port, () => {
      log(`⚡️[server]: Server is running at ${port}`);
    });
  }

  stop() {
    this.server.close(() => {
      log(`⚡️[server]: Server stops`);
    });
  }
}
