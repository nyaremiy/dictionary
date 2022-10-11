import { configureStore } from '@reduxjs/toolkit';
import inputSlice from '../features/input/inputSlice';

export const store = configureStore({
  reducer: {
    input: inputSlice
  }
});
