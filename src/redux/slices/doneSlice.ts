import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "../store";
import ITask from "../../types/itemTypes";

interface IDoneState {
    value : null | ITask[];
}

const initialState : IDoneState = {
    value : null
}

export const doneSlice = createSlice({
    name : "done",
    initialState,
    reducers : {
        setDone : (state,action : PayloadAction<ITask[]>) => {
            state.value = action.payload;
        }
    }
});

export const {setDone} = doneSlice.actions;
export const selectDone = (state:RootState) => state.done.value;
export default doneSlice.reducer;