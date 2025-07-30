import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

// 사용자 정의 타입 확장 (userId를 담기 위해)
declare module "express-serve-static-core" {
	interface Request {
		user?: { userId: string };
	}
}

export const verifyToken = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const authHeader = req.headers.authorization;

	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		return res.status(401).json({ message: "토큰이 없습니다." });
	}

	const token = authHeader.split(" ")[1];
	const secret = process.env.JWT_SECRET;
	if (!secret) {
		return res
			.status(500)
			.json({ message: "JWT 시크릿이 설정되지 않았습니다." });
	}

	try {
		const decoded = jwt.verify(token, secret) as JwtPayload;

		req.user = {
			userId: decoded.userId,
		};

		next();
	} catch (err) {
		return res.status(401).json({ message: "유효하지 않은 토큰입니다." });
	}
};
