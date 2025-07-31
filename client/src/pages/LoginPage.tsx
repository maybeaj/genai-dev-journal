import { useState } from "react";
import { loginApi } from "../services/auth";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const { token } = await loginApi({ email, password });
			localStorage.setItem("token", token); // 또는 cookie 사용도 가능
			alert("로그인 성공!");
			// TODO: 페이지 이동 등 추가 작업
		} catch (err: any) {
			setError(err.response?.data?.message || "로그인 실패");
		}
	};

	return (
		<form onSubmit={handleLogin} className="max-w-md mx-auto mt-10 space-y-4">
			<input
				type="email"
				placeholder="이메일"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				className="w-full p-2 border"
			/>
			<input
				type="password"
				placeholder="비밀번호"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				className="w-full p-2 border"
			/>
			{error && <p className="text-red-500">{error}</p>}
			<button type="submit" className="w-full p-2 text-white bg-blue-500">
				로그인
			</button>
		</form>
	);
};

export default LoginPage;
