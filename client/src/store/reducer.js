import types from "./types";

const initialState = {
    isAuth: false
}

const reducer = (state = initialState, action) => {
    const {payload} = action

    switch (action.type) {
        case types.SET_AUTH:
            return {...state, isAuth: payload}
        default: return state
    }
}

export default reducer