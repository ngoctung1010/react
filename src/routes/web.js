import express from "express";
import hcontroler1 from '../controller/homeControler';


const router = express.Router();


const initWebRoutes = (application) => {
    router.get("/", hcontroler1.home1);
    router.get("/user", hcontroler1.home2);
    router.post("/users/create", hcontroler1.home3);

    return application.use("/", router);

}

export default initWebRoutes;