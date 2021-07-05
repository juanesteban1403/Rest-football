import { Router } from "express";
import teamCoachName from '../controller/teamcontroller';


//Router
const router:Router = Router();


//Routes 
router.get('/get-team-coach-name', teamCoachName);



export default router;