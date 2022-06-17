import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import goalReducer from '../features/goals/goalSlice'

// the store is at the top level of a project and holds the global state.
// you will only want to pass reducers here
export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
  },
});
