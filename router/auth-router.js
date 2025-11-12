// const express = require("express")
import express from "express"
const router = express.Router();
import {home, register, login, user, userDelete, updateUser, userNavCount} from "../controllers/auth-controller.js"
import authMiddleware from "../Middlewares/auth-Middleware.js"

router.route("/").get(home)
router.route("/register").post(register)
router.route("/login").post(login)
router.route("/user").get(authMiddleware, user)
router.route("/user_nav_count").get(userNavCount)
router.route("/delete/:id").delete(userDelete)
router.route("/update/:userId").put(updateUser)

export default router

// app.post("/api/users", upload.single("image"),