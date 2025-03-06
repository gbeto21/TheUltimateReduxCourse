import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasks";
import employeesReducer from "./employees";
import logger from "redux-logger";
import error from "./middleware/error";

const store = configureStore(
    {
        reducer: {
            tasks: tasksReducer,
            employees: employeesReducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, error)
    }
);

export default store;