import pg from "pg";

export const pool = new pg.Pool({
    port: 5432,
    host: "localhost",
    user: "postgres",
    password: "Stewar_16",
    database: "tasksDB",
});

pool.on("connect", () => {
    console.log("> > > > Database connected < < < <");
});
