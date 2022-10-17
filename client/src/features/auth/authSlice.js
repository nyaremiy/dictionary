import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  auth: false
};

export const authSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload;
    }
  }
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
