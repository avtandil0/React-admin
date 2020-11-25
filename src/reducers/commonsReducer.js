import {ROLES_LOAD_SUCCESS, MOVIE_LOAD_SUCCESS, FILTER_CHANGE} from '../actions/actionTypes'

const commonsState = {
    roles: [],
}

const commonsReducer = (state = commonsState, action) => {
    const {type, payload} = action
    console.log('commonsReducer - ------------------',type,(payload))
    switch (type) {
        case ROLES_LOAD_SUCCESS:
            return {...state, roles: payload }
        default:
            return state
    }
}

export default commonsReducer