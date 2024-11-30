import { configureStore } from "@reduxjs/toolkit";
import catalogReducer from "../features/catalog/catalogSlice";
import authReducer from "../features/auth/authSlice";
import { createAPI } from "../services/api";

export const api = createAPI();

export const store = configureStore({
	reducer: {
		catalog: catalogReducer,
		auth: authReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: api,
			},
		}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
