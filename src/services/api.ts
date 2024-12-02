import axios, { AxiosInstance } from "axios";
import { getToken } from "./token";

const enum Default {
	BaseUrl = "http://localhost:3000",
	Timeout = 5000,
}

export const createAPI = (): AxiosInstance => {
	const api = axios.create({
		baseURL: Default.BaseUrl as string,
		timeout: Default.Timeout as number,
	});

	api.interceptors.request.use((config) => {
		const token = getToken();
		if (token && config.headers) {
			config.headers["X-token"] = token;
		}

		return config;
	});

	return api;
};
