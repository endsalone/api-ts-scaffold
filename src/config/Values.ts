import env from "dotenv";

env.config();

export default {
  database: {
    database: process.env.DATABASE_DB || "",
    host: process.env.DATABASE_HOST || "",
    password: process.env.DATABASE_PASSWORD || "",
    port: parseInt(process.env.DATABASE_PORT || "3306", 0),
    type: process.env.DATABASE_TYPE || "sqlite",
    username: process.env.DATABASE_USER || "",
  },
  env: process.env.env || "production",
  name: process.env.NAME || "api",
  port: process.env.PORT || 3000,
  url: `${process.env.URL}:${process.env.PORT}`,
};
