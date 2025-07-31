import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				{/* 필요한 페이지 추가 가능 */}
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
