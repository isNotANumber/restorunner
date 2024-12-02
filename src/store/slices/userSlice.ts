import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthorizstionStatus, RequestStatus } from "../../const";
import { User } from "../../types/user";

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
