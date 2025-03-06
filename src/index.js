import store from "./store";
import { fetchTasks } from "./tasks";

store.dispatch(
    {
        type: "apiRequest",
        payload: {
            url: "/tasks",
            onStart: "tasks/apiRequested",
            onSuccess: "tasks/getTasks",
            onError: "tasks/apiRequestFailed"
        }
    })