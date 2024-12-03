import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginUserData, User } from "../../types/user";
import { AxiosInstance } from "axios";
import { Endpoint } from "../../const";
import { dropToken, saveToken } from "../../services/token";

const checkAuth = createAsyncThunk<User, undefined, { extra: AxiosInstance }>(
	"auth/checkAuth",
	async (_arg, { extra: api }) => {
		const response = await api.get<User>(Endpoint.Login);
		return response.data;
	}
);

const login = createAsyncThunk<User, LoginUserData, { extra: AxiosInstance }>(
	"auth/login",
	async (body, { extra: api }) => {
		const response = await api.post<User>(Endpoint.Login, body);

		saveToken(response.data.token);
		return response.data;
	}
);

const logout = createAsyncThunk<unknown, undefined, { extra: AxiosInstance }>("auth/logout", async () => {
	dropToken();
});

export { checkAuth, login, logout };
