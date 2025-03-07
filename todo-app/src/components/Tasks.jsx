import React, { useContext } from "react"
import StoreContext from "../contexts/storeContext"

const Tasks = () => {

    const store = useContext(StoreContext)
    console.log(store);

    return <div>Tasks</div>
}

export default Tasks