import React, { useState } from "react";

const AddTask = () => {

    const [task, setTask] = useState("")

    const handleSubmit = () => { 
        
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