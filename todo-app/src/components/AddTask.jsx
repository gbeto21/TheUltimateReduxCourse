import React, { useState } from "react";
import { addNewTask } from "../store/tasks";
import { useDispatch } from "react-redux";


const AddTask = () => {

    const [task, setTask] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addNewTask({ task }))
        setTask("")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="task"
                    placeholder="Enter new task..."
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />

                <button type="submit">Add task</button>
            </form>
        </>
    )

}

export default AddTask