import "reflect-metadata"
import { DataSource } from "typeorm"
import { Personal } from "./entity/Personal"
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "$env/static/private";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: false,
    logging: false,
    entities: [Personal],
    migrations: [],
    subscribers: [],
});
