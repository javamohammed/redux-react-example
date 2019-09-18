import {STORE_RESULT, DELETE_RESULT} from './actionTypes'

export const storeResult = (count) => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: STORE_RESULT,
                result: count
            })
        }, 2000)
    }
}

export const deleteResult = (id) => {
    return {
        type: DELETE_RESULT,
        resultId: id
    }
}