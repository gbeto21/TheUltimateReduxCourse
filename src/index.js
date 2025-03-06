import store from "./store";
import { getTasks } from "./tasks";
import axios from "axios";

const gettingTasks = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/tasks")
        store.dispatch(getTasks({ tasks: response.data }))
    } catch (error) {
        store.dispatch({ type: "SHOW_ERROR", payload: { error: error.message } })
    }
}

gettingTasks()