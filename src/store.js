import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasks";
import employeesReducer from "./employees";
import api from "./middleware/api";
import error from "./middleware/error";

const store = configureStore(
    {
        reducer: {
            tasks: tasksReducer,
            employees: employeesReducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api, error)
    }
);

export default store;