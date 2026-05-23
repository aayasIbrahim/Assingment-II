import { Pool } from "pg";
import { createScheme } from "./schema.js";
import config from "../config/index.js";
export const pool = new Pool({
  connectionString: config.connection_string,
});

export const initDB = async () => {
  try {
    await createScheme();
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Database initialization failed:", error);
    throw error;
  }
};
