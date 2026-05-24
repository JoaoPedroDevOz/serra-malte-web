import express from "express";
import { route } from "./routes.ts";

const app = express();

const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use(route);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
