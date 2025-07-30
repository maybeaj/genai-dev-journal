import { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken";

const userRouter = Router();

userRouter.get("/me", verifyToken, (req, res) => {
	return res.status(200).json({ userId: req.user?.userId });
});

export default userRouter;
