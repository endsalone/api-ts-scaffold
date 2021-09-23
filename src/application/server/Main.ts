import { log } from "console";

import { Connection } from "application/database/Connection";
import { Routes as routes } from "application/routes/Routes";
import { App } from "application/server/App";

const server: App = App.instance;
const database: Connection = Connection.instance;

routes.load();
routes.print();
database
  .createConnection()
  .then(() => server.start())
  .catch((error) => log(error));
