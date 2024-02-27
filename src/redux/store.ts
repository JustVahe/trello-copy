import { configureStore } from "@reduxjs/toolkit";
import doneReducer from "./slices/doneSlice";
import inProgressReducer from "./slices/inProgressSlice";
import todoReducer from "./slices/todoSlice";

export const store = configureStore({
    reducer : {
        done : doneReducer,
        inProgress : inProgressReducer,
        todo : todoReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;