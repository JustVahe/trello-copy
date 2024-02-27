import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "../store";
import ITask from "../../types/itemTypes";

interface ITodoState {
    value : null | ITask[];
}

const initialState : ITodoState = {
    value : null
}

export const todoSlice = createSlice({
    name : "done",
    initialState,
    reducers : {
        setTodo : (state,action : PayloadAction<ITask[]>) => {
            state.value = action.payload;
        }
    }
});

export const {setTodo} = todoSlice.actions;
export const selectTodo = (state:RootState) => state.todo.value;
export default todoSlice.reducer;