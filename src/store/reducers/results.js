import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility';
const initialState = {
    results : []
}

const deleteResult = (state, action) => {
     const updateResult = state.results.filter(result => result.id !== action.resultId)
     return updateObject(state, {results: updateResult})
}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:  return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})})
        case actionTypes.DELETE_RESULT: return deleteResult(state, action)
        default:                        return state
    }
}

export default rootReducer