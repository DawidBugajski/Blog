import { configureStore } from '@reduxjs/toolkit';
import PostDetailsReducer from '../redux/slices/postDetailsSlice';
import loginModalReducer from './slices/loginModalSlice';

export const store = configureStore({
  reducer: {
    selectedPost: PostDetailsReducer,
    loginModal: loginModalReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
