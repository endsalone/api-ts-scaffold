import { log } from "console";

import { Connection } from "application/database/Connection";
import { createConnection as conn } from "typeorm";
import { type } from "./Type";

export class DatabaseMock extends Connection{
  static get instance(): Connection {
    return this._instance || (this._instance = new DatabaseMock());
  }

  async createConnection() {
    Connection._conn = await conn(type);
    log("⚡️[database]: DB TEST is connected");
  }

  async stopConnection() {
    await Connection.conn.close();
    log("⚡️[database]: DB TEST is disconnected");
  }

}
