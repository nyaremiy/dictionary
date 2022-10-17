import { configureStore } from '@reduxjs/toolkit';
import inputSlice from '../features/input/inputSlice';
import authSlice from './../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    input: inputSlice,
    auth: authSlice
  }
});
