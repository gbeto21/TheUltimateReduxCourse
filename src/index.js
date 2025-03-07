import store from "./store";
import { loadTask, updateCompleted, deleteTask } from "./tasks";

store.dispatch(
    loadTask()
)
store.dispatch(updateCompleted({ id: 3, completed: true }))
store.dispatch(deleteTask({ id: 5 }))