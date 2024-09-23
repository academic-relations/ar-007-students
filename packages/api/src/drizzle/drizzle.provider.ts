import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";
import * as userSchema from "./schema/user.schema";
import { env } from "../env";

export const DrizzleAsyncProvider = "drizzleProvider";

let dbInstance = null;
let connectionInstance = null;

export const getConnection = async () => {
  if (!connectionInstance) {
    connectionInstance = await mysql.createConnection({
      uri: env.DATABASE_URL,
    });
  }
  return connectionInstance;
};

export const getDbInstance = async () => {
  if (!dbInstance) {
    const connection = await getConnection();
    dbInstance = drizzle(connection, {
      schema: {
        userSchema,
      },
      mode: "default",
    });
  }
  return dbInstance;
};

export const drizzleProvider = [
  {
    provide: DrizzleAsyncProvider,
    useFactory: getDbInstance,
    exports: [DrizzleAsyncProvider],
  },
];
