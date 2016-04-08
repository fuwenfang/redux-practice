import Immutable from 'immutable'
import { CK_SELECTEDROWDATA} from 'actions/__demo/Customizable'

export default function Customizable(state = Immutable.Map(), action) {
    switch(action.type) {
        case CK_SELECTEDROWDATA:
            return state.merge(action.payload)
        default:
            return state
    }
}