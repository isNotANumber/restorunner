import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthorizstionStatus } from "../../const";

type AuthState = {
	authorizationStatus: AuthorizstionStatus;
};

const initialState: AuthState = {
	authorizationStatus: AuthorizstionStatus.NoAuth,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setAuthorizationStatus: (state, action: PayloadAction<AuthorizstionStatus>) => {
			state.authorizationStatus = action.payload;
		},
	},
	selectors: {
		getAuthorizationStatus: (state: AuthState) => state.authorizationStatus,
	},
});

const authActions = authSlice.actions;
const authSelectors = authSlice.selectors;

export { authActions, authSelectors, authSlice };
