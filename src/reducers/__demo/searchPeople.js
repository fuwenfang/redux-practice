/**
 * Created by chenhf on 16-3-16.
 */
import Immutable from 'immutable'
import { combineReducers } from 'redux'
import {
    CK_SEARCH_GETDATA,
    CK_SEARCH_GETDATA_SUCCESS,
    CK_SEARCH_GETDATA_FAILURE,
    CK_SEARCH_GETDATA_ERROR_NETWORK,
    CK_CLICK_GETDATA
} from 'actions/__demo/searchPeople'

export const searchPeople = (state = Immutable.Map({data:[]}), action) => {
    let payload = action.payload

    switch(action.type) {
        case CK_SEARCH_GETDATA:
            return state.merge({ pending: true })
        case CK_SEARCH_GETDATA_SUCCESS:
            //console.log(state.merge(action.payload))
            return state.merge(action.payload,{ itemdata:[],areapadding:0})
        case CK_SEARCH_GETDATA_FAILURE:
            return state.merge(action.payload, { pending: false })
        case CK_CLICK_GETDATA:
            return state.merge(action.payload)
        default:
            return state
    }
}


export default searchPeople