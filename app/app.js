import express from "express";

import indexroutes from './routes/intex.routes.js'

const app = express();

app.use(indexroutes);
export default app;
