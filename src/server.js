import express from "express";
import configviewEmgine from "./configs/viewEngine";
import initWebRoutes from "./routes/web"


const app = express();

// configviewEmgine(app);

initWebRoutes(app);
configviewEmgine(app);


const PORT = 8081;
app.listen(PORT, () => {

    console.log("check =" + PORT);
})
