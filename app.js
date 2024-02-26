import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.static(path.join(__dirname, 'public')));


app.listen(3500, () => {console.log("running")});

app.get('/', (req, res) => {
    res.sendFile("/index.html");
});
