import "dotenv/config";
import pkg from "pg";
const { Pool } = pkg;

const env = process.env;
const USER = env.PGUSER;
const HOST = env.PGHOST;
const PASSWORD = env.PGPASSWORD;
const DATABASE = env.PGDATABASE;

const config = {
    user: USER,
    host: HOST,
    password: PASSWORD,
    database: DATABASE,
}
const pool = new Pool(config)






export default pool;