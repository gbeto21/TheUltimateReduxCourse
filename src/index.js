import store from "./store";
import { fetchTasks } from "./tasks";

store.dispatch(fetchTasks())