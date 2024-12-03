import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthorizstionStatus, RequestStatus } from "../../const";
import { User } from "../../types/user";
import { checkAuth, login, logout } from "../thunks/authThunk";

type UserState = {
	info: User | null;
	status: AuthorizstionStatus;
	requestStatus: RequestStatus;
};

const initialState: UserState = {
	info: null,
	status: AuthorizstionStatus.NoAuth,
	requestStatus: RequestStatus.Idle,
};

const userSlice = createSlice({
	extraReducers: (builder) => {
		builder
			.addCase(checkAuth.fulfilled, (state, action) => {
				state.info = action.payload;
				state.status = AuthorizstionStatus.Auth;
				state.requestStatus = RequestStatus.Success;
			})
			.addCase(checkAuth.pending, (state) => {
				state.requestStatus = RequestStatus.Loading;
			})
			.addCase(checkAuth.rejected, (state) => {
				state.status = AuthorizstionStatus.NoAuth;
				state.requestStatus = RequestStatus.Failed;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.info = action.payload;
				state.status = AuthorizstionStatus.Auth;
				state.requestStatus = RequestStatus.Success;
			})
			.addCase(login.pending, (state) => {
				state.requestStatus = RequestStatus.Loading;
			})
			.addCase(login.rejected, (state) => {
				state.status = AuthorizstionStatus.NoAuth;
				state.requestStatus = RequestStatus.Failed;
			})
			.addCase(logout.fulfilled, (state) => {
				state.info = null;
				state.status = AuthorizstionStatus.NoAuth;
			});
	},
	name: "auth",
	initialState,
	reducers: {
		setUserStatus: (state, action: PayloadAction<AuthorizstionStatus>) => {
			state.status = action.payload;
		},
	},
	selectors: {
		user: (state: UserState) => state.info,
		userStatus: (state: UserState) => state.status,
		userRequestStatus: (state: UserState) => state.requestStatus,
	},
});

const userActions = userSlice.actions;
const userSelectors = userSlice.selectors;

export { userActions, userSelectors, userSlice };
