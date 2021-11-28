import { SHOW_LOADER } from "../types"

const hadlers = {
    [SHOW_LOADER] : state => ({...state, loading: true}),
    DEFAULT: state => state
}

export const firebaseReducer = (state, action) => {
    const handle = hadlers[action.type] || hadlers.DEFAULT
    return handle(state, action)
}