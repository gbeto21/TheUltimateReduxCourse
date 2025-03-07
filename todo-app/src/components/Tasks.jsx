import React, { useEffect } from "react"
import { loadTasks } from "../store/tasks"
import { useDispatch, useSelector } from "react-redux"

const Tasks = () => {

    const { tasks, loading } = useSelector(state => state.tasks)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadTasks())
    }, [])

    return (
        <>
            {
                loading ? (
                    <>
                        <p>Loading...</p>
                    </>
                ) : (
                    <div>
                        {
                            tasks.map((tasks) => (
                                <p key={tasks.id}>{tasks.task}</p>
                            ))
                        }
                    </div>
                )
            }
        </>
    )
}

export default Tasks