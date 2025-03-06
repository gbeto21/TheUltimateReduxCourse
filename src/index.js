import store from "./store";
import { addTask, completeTask, removeTask } from "./tasks";
import { addEmployee } from "./employees";

const unsuscribe = store.subscribe(() => {
    console.log("Updated", store.getState());
})

store.dispatch(addTask({ task: "Learn Redux" }));
store.dispatch(addTask({ task: "Learn React" }));
console.log(store.getState());

unsuscribe();

store.dispatch(completeTask({ id: 2 }));

store.dispatch(removeTask({ id: 1 }));

store.dispatch(addEmployee({ name: "John" }))
console.log(store.getState());
store.dispatch({ type: "SHOW_ERROR", payload: { error: "Testing error" } })