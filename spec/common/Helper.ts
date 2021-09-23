import "jasmine";

import * as stream from "stream";

import { Routes as routes } from "application/routes/Routes";
import { App } from "application/server/App";

export class Helper {

  private static _instance: Helper;
  private _server: App;

  get server(): App {
    return this._server;
  }

  serverStart() {
    this._server = App.instance;

    spyOn(this.server.app, "get").and.callFake((arg: any) => {
        if(arg === "port") {
          return 4000;
        }
        return arg;
      })

    routes.load();
    this.server.start();
  }

  async stop() {
    await this.server.stop();
  }

  static get instance(): Helper {
    return this._instance || (this._instance = new Helper());
  }

  static async parseJson(res: stream, callback: (err: Error | null, body: any) => void): Promise<any> {
    let data = Buffer.from("");
    res.on("data", (chunk) => {
      data = Buffer.concat([data, chunk]);
    });
    res.on("end", () => {
      return callback(null, JSON.parse(
        data
          .toString()
          .replace(/json space+/g, " ")
      ));
    });
  }
}
