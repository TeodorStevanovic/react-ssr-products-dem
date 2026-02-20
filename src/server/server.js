import express from "express";
import { renderToString } from "react-dom/server";

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/*", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
