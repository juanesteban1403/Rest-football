import { Router } from "express";

const router:Router = Router();

router.get('/', (request,response) =>{
    response.send("Route")
})

export default router;