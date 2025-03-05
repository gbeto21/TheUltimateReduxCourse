import * as actionTypes from "./actionTypes";
import { createAction } from "@reduxjs/toolkit";

export const addTask = createAction(actionTypes.ADD_TASK);

export const removeTask = createAction(actionTypes.REMOVE_TASK);

export const completeTask = createAction(actionTypes.COMPLETE_TASK);