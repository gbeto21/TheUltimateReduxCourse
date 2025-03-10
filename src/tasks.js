import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./apiStore";

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
                action.payload
            ],
            removeTask: (state, action) => {
                const index = state.tasks.findIndex(
                    (task) => task.id === action.payload.id
                );
                state.tasks.splice(index, 1);
            },
            completeTask: (state, action) => {
                state.tasks.map(task =>
                    task.id === action.payload.id ?
                        {
                            ...task,
                            completed: action.payload.completed
                        } :
                        task
                )
            }
        }
    }
)

export const
    {
        apiRequested,
        apiRequestedFailed,
        getTasks,
        addTask,
        removeTask,
        completeTask
    } = tasksSlice.actions

export default tasksSlice.reducer

//Action creators
const url = "/tasks"

export const loadTask = () =>
    apiCallBegan(
        {
            url,
            onStart: apiRequested.type,
            onSuccess: getTasks.type,
            onError: apiRequestedFailed.type
        }
    )

export const addNewTask = (task) => apiCallBegan({
    url,
    method: "POST",
    data: task,
    onSuccess: addTask.type
})

export const updateCompleted = task => apiCallBegan({
    url: `${url}/${task.id}`,
    method: "PATCH",
    data: task,
    onSuccess: completeTask.type
})

export const deleteTask = (task) =>
    apiCallBegan({
        // /tasks/6
        url: `${url}/${task.id}`,
        method: "DELETE",
        onSuccess: removeTask.type,
    });