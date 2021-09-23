import { log } from "console";
import {
  Connection as Conn,
  createConnection,
} from "typeorm";

import { type } from "application/database/Type";

export class Connection {

  protected static _conn: Conn;
  protected static _instance: Connection;

  async createConnection() {
    Connection._conn = await createConnection(type);
    log("⚡️[database]: DB is connected");
  }

  async stopConnection() {
    await Connection.conn.close();
  }

  static get conn(): Conn {
    return this._conn;
  }


  static get instance(): Connection {
    return this._instance || (this._instance = new Connection());
  }

}
