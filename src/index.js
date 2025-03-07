import store from "./store";
import { loadTask } from "./tasks";

store.dispatch(
    loadTask()
)