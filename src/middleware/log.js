const log = store => next => action => {
    next(action)
}

export default log