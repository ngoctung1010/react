import express from "express";
import configviewEmgine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from 'body-parser'
const app = express();

//config bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// configviewEmgine(app);

initWebRoutes(app);
configviewEmgine(app);









const PORT = process.env.PORT || 8088;
app.listen(PORT, () => {

    console.log("check =" + PORT);
})
