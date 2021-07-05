import { Router } from "express";

const router:Router = Router();

import teamCoachName from '../controller/teamcontroller';

router.get('/get-team-coach-name', teamCoachName);

export default router;