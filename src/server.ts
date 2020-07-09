const express = require("express");

const app = express();

app.get("/", (req: any, res: any) => {
  return res.json({ message: "hello world" });
});

app.listen(3333, () => console.log("Server running! 🤘🏻"));
