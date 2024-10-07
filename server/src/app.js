const serverless = require("serverless-http");
const express = require("express");
const { neon, neonConfig} = require("@neondatabase/serverless");

//! => put neon into its own module

const app = express();

async function dbClient() {
  // for HTTP connection and non pooling
  neonConfig.fetchConnectionCache = true;
  const sql = neon(process.env.DATABASE_URL);
  return sql;
};


app.get("/", async (req, res, next) => {
  console.log(process.env.DEBUG);
  const sql = await dbClient();
  const [results] = await sql`select now() as time`;
  return res.status(200).json({
    message: "Daddy!",
    time: results.time, 
  });
});

app.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});



exports.handler = serverless(app);
