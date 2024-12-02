import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizstionStatus } from '../../const';

type AuthState = {
  authorizationStatus: AuthorizstionStatus;
};

const initialState: AuthState = {
  authorizationStatus: AuthorizstionStatus.NoAuth,
};

const authSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setAuthorizationStatus: (
      state,
      action: PayloadAction<AuthorizstionStatus>
    ) => {
      state.authorizationStatus = action.payload;
    },
  },
});

export const { setAuthorizationStatus } = authSlice.actions;

export default authSlice.reducer;
