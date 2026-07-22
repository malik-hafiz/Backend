
import express from "express"
import {admin} from "../controller/userController.js"
import { login } from "../controller/loginController.js"
const router = express.Router()

router.post("/create", admin)
// http://localshost:8000/api/v1/user/login

router.post("/login" , login)

export default router;
// http://localshost:8000/api/v1/user/create