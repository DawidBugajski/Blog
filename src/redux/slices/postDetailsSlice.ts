// rework for login
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from 'src/types/postTypes';
import { RootState } from 'src/redux/store';

export interface PostDetailsState {
  selectedPost: Post | null;
}

const initialState: PostDetailsState = {
  selectedPost: null,
};

export const postDetailsSlice = createSlice({
  name: 'selectedPost',
  initialState,
  reducers: {
    setSelectedPost: (state, action: PayloadAction<Post | null>) => {
      state.selectedPost = action.payload;
    },
  },
});

export const { setSelectedPost } = postDetailsSlice.actions;

// Select the selected post from the state
export const selectSelectedPost = (state: RootState) =>
  state.selectedPost.selectedPost;

export default postDetailsSlice.reducer;
