import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/store';
import { LoginProps } from 'src/types/loginTypes';

export const initialState: LoginProps = {
  isOpen: false,
  isLoggedIn: false,
  token: null,
  user: null,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setOpenModal: (state) => {
      state.isOpen = true;
    },
    setCloseModal: (state) => {
      state.isOpen = false;
    },
    setLoggedIn: (
      state,
      action: PayloadAction<{ token: string; user: LoginProps['user'] }>
    ) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      localStorage.setItem('token', action.payload.token);
    },
    setLoggedOut: (state) => {
      state.isLoggedIn = false;
      state.token = null;
      state.user = null;
      localStorage.removeItem('token');
    },
  },
});

export const { setOpenModal, setCloseModal, setLoggedIn, setLoggedOut } =
  loginSlice.actions;

export const selectOpenLoginModal = (state: RootState) => state.login.isOpen;
export const selectIsLoggedIn = (state: RootState) => state.login.isLoggedIn;
export const selectUser = (state: RootState) => state.login.user;
export const selectToken = (state: RootState) => state.login.token;

export default loginSlice.reducer;
