// rework for login
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/store';

export type LoginModalState = {
  isOpen: boolean;
};

const initialState: LoginModalState = {
  isOpen: false,
};

export const loginModalSlice = createSlice({
  name: 'loginModal',
  initialState,
  reducers: {
    setOpenModal: (state) => {
      state.isOpen = true;
    },
    setClosenModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { setOpenModal, setClosenModal } = loginModalSlice.actions;

// Select the selected post from the state
export const selectOpenLoginModal = (state: RootState) =>
  state.loginModal.isOpen;

export default loginModalSlice.reducer;
