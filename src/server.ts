require("dotenv").config();
const express = require("express");

const app = express();

app.get("/", (req: any, res: any) => {
  return res.json({ message: "Hello world" });
});

app.listen(process.env.PORT, () =>
  console.log(`Server running at http://localhost:${process.env.PORT}! 🤘`)
);

export default app;
