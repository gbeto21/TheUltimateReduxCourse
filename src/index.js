import { apiCallBegan } from "./apiStore";
import store from "./store";

store.dispatch(
    apiCallBegan(
        {
            url: "/tasks",
            onStart: "tasks/apiRequested",
            onSuccess: "tasks/getTasks",
            onError: "tasks/apiRequestFailed"
        }
    )
)