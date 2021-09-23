import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";

export const type: SqliteConnectionOptions = {
  database: ":memory:",
  entities: [
    "src/core/entities/*.ts"
  ],
  logging: false,
  migrations: [
    "src/migration/**/*.ts"
  ],
  synchronize: true,
  // @ts-ignore
  type: "sqlite",
};
