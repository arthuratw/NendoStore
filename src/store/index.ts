import {configureStore} from '@reduxjs/toolkit';
import userReducer from './reduces/userReducer';

export const store = configureStore({
  reducer: {
    userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
