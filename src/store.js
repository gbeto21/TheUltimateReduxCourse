import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasks";
import employeesReducer from "./employees";

const store = configureStore(
    {
        reducer: {
            tasks: tasksReducer,
            employees: employeesReducer
        }
    }
);

export default store;