import express from "express";
import { Router } from "express";
const app = express();
const route = Router();
app.use(express.json());
route.get("/", (req, res) => {
    res.json({ message: "Wow! My first project in TypeScript!!!" });
});
app.use(route);
const PORT = 3030;
app.listen(PORT, () => `Server running on port ${PORT}`);
//# sourceMappingURL=server.js.map