import store from "./store";
import { fetchTasks } from "./tasks";

store.dispatch(
    {
        type: "apiRequest",
        payload: {
            url: "/tasks",
            onSuccess: "tasks/getTasks",
            onError: "SHOW_ERROR"
        }
    })