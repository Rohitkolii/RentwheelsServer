import express from "express"
import { getAllUsers, deleteUserById } from "../controllers/admin-controller.js";
import authMiddleware from "../Middlewares/auth-Middleware.js";
import adminMiddleware from "../Middlewares/admin-Middleware.js";
const router = express.Router();

router.route("/users").get(authMiddleware,adminMiddleware, getAllUsers);
router.route("/users/delete/:id").delete(authMiddleware,adminMiddleware, deleteUserById);

export default router;