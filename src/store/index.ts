import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { offersSlice } from "./slices/offersSlice";
import { userSlice } from "./slices/userSlice";
import { createAPI } from "../services/api";
import { categoriesSlice } from "./slices/categoriesSlice";

const reducer = combineReducers({
	[offersSlice.name]: offersSlice.reducer,
	[categoriesSlice.name]: categoriesSlice.reducer,
	[userSlice.name]: userSlice.reducer,
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
