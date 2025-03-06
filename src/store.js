import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasks";
import employeesReducer from "./employees";
import log from "./middleware/log";

const store = configureStore(
    {
        reducer: {
            tasks: tasksReducer,
            employees: employeesReducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(log)
    }
);

export default store;