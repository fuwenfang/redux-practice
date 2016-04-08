/**
 * Created by c on 16/3/21.
 */
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import report from './__demo/report'
import user from './__demo/user'
import searchPeople from './__demo/searchPeople'
import Customizable from './__demo/Customizable'


const rootReducer = combineReducers({
    report,
    user,
    searchPeople,
    Customizable,
    routing
})

export default rootReducer