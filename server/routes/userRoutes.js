import { Router } from "express";
import { registerUser, loginUser, setAvatar } from "../controllers/userController.js";

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/setAvatar/:id', setAvatar);

export default router;