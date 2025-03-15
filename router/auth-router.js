// const express = require("express")
import express from "express"
const router = express.Router();
import {home, register, login, user} from "../controllers/auth-controller.js"
import authMiddleware from "../Middlewares/auth-Middleware.js"

router.route("/").get(home)
router.route("/register").post(register)
router.route("/login").post(login)
router.route("/user").get(authMiddleware, user)

export default router