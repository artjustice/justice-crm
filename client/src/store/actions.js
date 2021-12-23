import types from './types'

const actions = {
    setAuth(payload) {
        return {type: types.SET_AUTH, payload}
    }
}
export default actions