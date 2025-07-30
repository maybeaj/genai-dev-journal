import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt, { SignOptions }  from "jsonwebtoken";
import { createUser, findUserByEmail } from "../models/user.model";

export const register = async (req: Request, res: Response) => {
	const { email, password, name } = req.body;

	try {
		const existingUser = await findUserByEmail(email);
		if (existingUser)
			return res.status(409).json({ message: "이미 존재하는 이메일입니다." });

		const hashedPassword = await bcrypt.hash(password, 10);
		await createUser(email, hashedPassword, name);
		return res.status(201).json({ message: "회원가입 성공" });
	} catch (err) {
		return res.status(500).json({ message: "서버 에러" });
	}
};

export const login = async (req: Request, res: Response) => {
	const { email, password } = req.body;

	try {
		const user = await findUserByEmail(email);
		if (!user)
			return res.status(401).json({ message: "존재하지 않는 이메일입니다." });

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch)
			return res.status(401).json({ message: "비밀번호가 틀렸습니다." });

		const secret = process.env.JWT_SECRET;
		if (!secret) throw new Error("JWT_SECRET is not defined");

		const payload = { userId: user.id };
		const options: SignOptions = {
			algorithm: "HS256",
			expiresIn: 60 * 60 * 2, // 2시간
		};

		const token = jwt.sign(payload, secret, options);

		return res.status(200).json({ token });
	} catch (err) {
		return res.status(500).json({ message: "서버 에러" });
	}
};
