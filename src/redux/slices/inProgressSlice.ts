import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "../store";
import ITask from "../../types/itemTypes";

interface IInProgressState {
    value : null | ITask[];
}

const initialState : IInProgressState = {
    value : null
}

export const inProgressSlice = createSlice({
    name : "done",
    initialState,
    reducers : {
        setInProgress : (state,action : PayloadAction<ITask[]>) => {
            state.value = action.payload;
        }
    }
});

export const {setInProgress} = inProgressSlice.actions;
export const selectInProgress = (state:RootState) => state.inProgress.value;
export default inProgressSlice.reducer;