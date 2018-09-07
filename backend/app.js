import path from "path";
import express from "express";
import logger from "morgan";

const app = express();

app.use(logger("dev"));

app.get("/hello", (req, res) => {
  res.send({ express: "Hola!" });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (req, res) => {
    res.sendFilter(path.join(__dirname, "../client/build", "index.html"));
  });
}

export default app;
