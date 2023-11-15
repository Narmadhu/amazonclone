import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slice/cartSlice";
import userReducer from "../slice/userSlice";

export const rootReducer = combineReducers({
  Cart: cartReducer,
  User: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
