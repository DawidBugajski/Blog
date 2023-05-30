import { configureStore } from '@reduxjs/toolkit';
import loginReducer, { initialState } from './slices/loginSlice';
import { LoginProps } from 'src/types/loginTypes';

const token = localStorage.getItem('token');
const user = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user') as string)
  : null;

let preloadedState: { login: LoginProps };

if (token && user) {
  preloadedState = {
    login: {
      ...initialState,
      isLoggedIn: true,
      token: token,
      user: user,
    },
  };
} else {
  preloadedState = {
    login: initialState,
  };
}

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
  preloadedState, // adding loaded data to store configuration
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
