import { configureStore } from "@reduxjs/toolkit";
import catalogReducer from "./slices/catalogSlice";
import authReducer from "./slices/authSlice";
import { createAPI } from "../services/api";

export const store = configureStore({
	reducer: {
		catalog: catalogReducer,
		auth: authReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: createAPI(),
			},
		}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
