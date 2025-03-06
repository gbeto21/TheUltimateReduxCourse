import { createSlice } from "@reduxjs/toolkit";

let id = 0;

const tasksSlice = createSlice(
    {
        name: "tasks",
        initialState: [],
        reducers: {
            getTasks: (state, action) => action.payload.tasks,
            addTask: (state, action) => [
                ...state,
                {
                    id: ++id,
                    task: action.payload.task,
                    completed: false
                }
            ],
            removeTask: (state, action) => state.filter(task => task.id !== action.payload.id),
            completeTask: (state, action) =>
                state.map(task =>
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