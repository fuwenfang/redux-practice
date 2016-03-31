/**
 * Created by chenhf on 16-3-16.
 */
import Immutable from 'immutable'
import { combineReducers } from 'redux'
import {
    CK_SEARCH_GETDATA,
    CK_SEARCH_GETDATA_SUCCESS,
    CK_SEARCH_GETDATA_FAILURE,
    CK_SEARCH_GETDATA_ERROR_NETWORK
} from 'actions/__demo/searchPeople'

export const searchPeople = (state = Immutable.Map(), action) => {
    alert(1);
    let payload = action.payload

    switch(action.type) {
        case CK_SEARCH_GETDATA:
            return state.merge({ pending: true })
        case CK_SEARCH_GETDATA_SUCCESS:
            return state.merge(action.payload)
        case CK_SEARCH_GETDATA_FAILURE:
            return state.merge(action.payload, { pending: false })
        default:
            return state
    }

}
export default searchPeople