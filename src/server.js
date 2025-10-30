import express from "express";
import routes from "./routes.js";

const app = express();
const PORT = 9000;

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(
    `📚 Bookshelf API running on http://localhost:${PORT} (port ${PORT})`
  );
});
