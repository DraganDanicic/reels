import { configureStore } from '@reduxjs/toolkit';

import potReducer from './potReducer';
import reelsReducer  from './reelsReducer';
export const store = configureStore({
  reducer: {
    pot: potReducer,
    reels: reelsReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch