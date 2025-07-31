import api from "./axios";

interface LoginPayload {
	email: string;
	password: string;
}

export const loginApi = async (data: LoginPayload) => {
	const response = await api.post("/auth/login", data);
	return response.data; // { token: string }
};
