import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export type UserProfile = {
  id: number;
  email: string;
  name: string;
  phone: string;
  cpf: string;
};

interface UserState {
  user?: UserProfile;
}

const initialState: UserState = {
  user: undefined,
};

export const userSlice = createSlice({
  name: 'userReducee',
  initialState,
  reducers: {
    setUserAction: (state, action: PayloadAction<UserProfile>) => {
      state.user = action.payload;
    },
  },
});

export const {setUserAction} = userSlice.actions;

export default userSlice.reducer;
