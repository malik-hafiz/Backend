
import express from "express"
import {admin} from "../controller/userController.js"
import { login } from "../controller/loginController.js"
const router = express.Router()

router.post("/create", admin)

router.post("/login" , login)

export default router;
