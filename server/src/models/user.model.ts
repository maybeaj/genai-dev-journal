import { db } from "../config/db";

export const createUser = async (
	email: string,
	password: string,
	name: string
) => {
	const [result] = await db.query(
		"INSERT INTO users (email, password, name) VALUES (?, ?, ?)",
		[email, password, name]
	);
	return result;
};

export const findUserByEmail = async (email: string) => {
	const [rows]: any = await db.query("SELECT * FROM users WHERE email = ?", [
		email,
	]);
	return rows[0]; // 첫 번째 사용자
};
