import { Router } from "express";
import pingController from '../controllers/ping'

const router = Router()

router.get('/ping', pingController)

export default router