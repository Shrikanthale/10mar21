import express from 'express';
import {getUsers,createUser} from '../controller/users.js'
const router = express.Router();

router.get("/",getUsers)
//router.get("/id",getUserById)
router.post("/",createUser)
//router.delete("/",deleteUserById)
//router.patch("/",deleteUsers)
export default router