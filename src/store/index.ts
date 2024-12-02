import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { offersSlice } from "./slices/offersSlice";
import { authSlice } from "./slices/authSlice";
import { createAPI } from "../services/api";
import { categoriesSlice } from "./slices/categoriesSlice";

const reducer = combineReducers({
	[offersSlice.name]: offersSlice.reducer,
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
