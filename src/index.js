import store from "./store";
import { loadTask, addNewTask } from "./tasks";

store.dispatch(
    loadTask()
)
store.dispatch(
    addNewTask({ task: "Complete course" })
)