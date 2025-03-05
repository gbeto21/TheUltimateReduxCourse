import store from "./store";
import { addTask, removeTask } from "./action";

const unsuscribe = store.subscribe(() => {
    console.log("Updated", store.getState());
})

store.dispatch(addTask("Learn Redux"));
store.dispatch(addTask("Learn React"));
console.log(store.getState());

unsuscribe();

store.dispatch(removeTask(1));
console.log(store.getState());
