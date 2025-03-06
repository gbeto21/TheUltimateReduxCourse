import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasks";
import employeesReducer from "./employees";
import logger from "redux-logger";

const store = configureStore(
    {
        reducer: {
            tasks: tasksReducer,
            employees: employeesReducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
    }
);

export default store;