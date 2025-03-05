import store from "./store";
import { addTask } from "./action";

store.dispatch(addTask("Learn Redux"));
console.log(store.getState());
store.dispatch({ type: "REMOVE_TASK", payload: { id: 1 } });
console.log(store.getState());
