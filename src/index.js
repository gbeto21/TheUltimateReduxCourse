import store from "./store";
import { addTask, removeTask, completeTask } from "./action";

const unsuscribe = store.subscribe(() => {
    console.log("Updated", store.getState());
})

store.dispatch(addTask("Learn Redux"));
store.dispatch(addTask("Learn React"));
console.log(store.getState());

unsuscribe();

store.dispatch(completeTask(2))

store.dispatch(removeTask(1));
console.log(store.getState());
