import * as actionTypes from "./actionTypes";
import { createReducer } from "@reduxjs/toolkit";
let id = 0;

export default createReducer([], builder => {
    builder
        .addCase(
            actionTypes.ADD_TASK,
            (state, action) =>
                [
                    ...state,
                    {
                        id: ++id,
                        task: action.payload.task,
                        completed: false
                    }
                ]
        )
        .addCase(
            actionTypes.REMOVE_TASK,
            (state, action) => state.filter(task => task.id !== action.payload.id)
        )
        .addCase(
            actionTypes.COMPLETE_TASK,
            (state, action) =>
                state.map(task =>
                    task.id === action.payload.id ?
                        { ...task, completed: true } :
                        task
                )
        )
})