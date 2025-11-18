import express from "express";
import { createUser, loginUser, logoutCurrentUser, getAllUsers, getCurrentUserProfile, updateCurrentUserProfile, deleteUserById, } from "../controllers/userController.js"; // ✅ đường dẫn chuẩn

import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js"

const router = express.Router();

// POST /api/users
router.route("/").post(createUser).get(authenticate, authorizeAdmin, getAllUsers);
router.post('/auth', loginUser);
router.post("/logout", logoutCurrentUser);

router.route('/profile').get(authenticate, getCurrentUserProfile).put(authenticate, updateCurrentUserProfile);

// ADMIN ROUTES
router.route('/:id').delete(authenticate, authorizeAdmin, deleteUserById)

export default router;