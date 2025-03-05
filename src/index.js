import store from "./store";
import { addTask, removeTask, completeTask } from "./action";

const unsuscribe = store.subscribe(() => {
    console.log("Updated", store.getState());
})

store.dispatch(addTask({ task: "Learn Redux" }));
store.dispatch(addTask({ task: "Learn React" }));
console.log(store.getState());

unsuscribe();

store.dispatch(completeTask({ id: 2 }));

store.dispatch(removeTask({ id: 1 }));
console.log(store.getState());
