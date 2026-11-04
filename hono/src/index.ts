import { Hono } from "hono";
import { v1 } from "./routes/v1";

const app = new Hono();

app.route("/api/v1", v1);

export default { port: process.env.PORT || 2300, fetch: app.fetch };
