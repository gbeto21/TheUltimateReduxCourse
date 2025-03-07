import store from "./store";
import { loadTask, updateCompleted } from "./tasks";

store.dispatch(
    loadTask()
)
store.dispatch(updateCompleted({ id: 3, completed: true }))