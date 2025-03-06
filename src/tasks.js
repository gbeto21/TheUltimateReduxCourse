import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./utils/http";

let id = 0;
const initialState = {
    tasks: [],
    loading: false,
    error: null
}

export const fetchTasks = createAsyncThunk('fetchTasks', async (a, { rejectWithValue }) => {
    try {
        const response = await axios.get("/tasks")
        return { tasks: response.data }
    } catch (error) {
        return rejectWithValue({ error: error.message })
    }
})

const tasksSlice = createSlice(
    {
        name: "tasks",
        initialState,
        reducers: {
            getTasks: (state, action) => state.tasks = action.payload.tasks,
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
        },
        extraReducers:
            (builder) => {
                builder
                    .addCase(fetchTasks.pending, (state) => {
                        state.loading = true;
                        state.error = null;
                    })
                    .addCase(fetchTasks.fulfilled, (state, action) => {
                        state.loading = false;
                        state.tasks = action.payload.tasks;
                    })
                    .addCase(fetchTasks.rejected, (state, action) => {
                        state.loading = false;
                        state.error = action.payload.error
                    });
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