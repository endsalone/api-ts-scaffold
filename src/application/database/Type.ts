import config from "config/Values";
import {ConnectionOptions} from "typeorm";

const entities = (config.env === "production")?
  "src/core/entities/*.js" :
  "src/core/entities/*.ts";

const migrations = (config.env === "production")?
  "src/migration/**/*.js" :
  "src/migration/**/*.ts";

export const type: ConnectionOptions = {
  database: config.database.database,
  entities: [
    entities
  ],
  host: config.database.host,
  logging: false,
  migrations: [
    migrations
  ],
  password: config.database.password,
  port: config.database.port,
  synchronize: true,
  // @ts-ignore
  type: config.database.type,
  username: config.database.username,
};
