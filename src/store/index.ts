import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { catalogSlice } from "./slices/catalogSlice";
import { authSlice } from "./slices/authSlice";
import { createAPI } from "../services/api";
import { categoriesSlice } from "./slices/categoriesSlice";

const reducer = combineReducers({
	[catalogSlice.name]: catalogSlice.reducer,
	[categoriesSlice.name]: categoriesSlice.reducer,
	[authSlice.name]: authSlice.reducer,
});

export const store = configureStore({
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: createAPI(),
			},
		}),
	reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
