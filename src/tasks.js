import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./utils/http";

let id = 0;
const initialState = {
    tasks: [],
    loading: false,
    error: null
}

const tasksSlice = createSlice(
    {
        name: "tasks",
        initialState,
        reducers: {
            apiRequested: (state, action) => {
                state.loading = true
            },
            apiRequestedFailed: (state, action) => {
                state.loading = false
            },
            getTasks: (state, action) => {
                return {
                    ...state,
                    loading: false,
                    tasks: action.payload
                }
            },
            addTask: (state, action) => [
                ...state.tasks,
                {
                    id: ++id,
                    task: action.payload.task,
                    completed: false
                }
            ],
            removeTask: (state, action) => state.tasks.filter(task => task.id !== action.payload.id),
            completeTask: (state, action) =>
                state.tasks.map(task =>
                    task.id === action.payload.id ?
                        { ...task, completed: true } :
                        task
                )
        }
    }
)

export const
    {
        getTasks,
        addTask,
        removeTask,
        completeTask
    } = tasksSlice.actions

export default tasksSlice.reducer