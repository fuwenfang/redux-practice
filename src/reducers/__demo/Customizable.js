import Immutable from 'immutable'
import {CK_TABLE_GETDATA, CK_TABLE_GETDATA_SUCCESS,CK_SELECTEDROWDATA,
    CK_SETTINGCLOSE,CK_CHANGETAB,CK_CHANGEISREQUIRED,CK_ADDITEM} from 'actions/__demo/Customizable'

export default function Customizable(state = Immutable.fromJS({rows:[], selectedRow:{}, IsShow:false, currentTabIndex:0}), action) {
    switch(action.type) {
    	case CK_TABLE_GETDATA:
    		return state
    	case CK_TABLE_GETDATA_SUCCESS:
            return state.merge(action.payload)
        case CK_SELECTEDROWDATA:
            return state.merge(action.payload,{'IsShow':true})
        case CK_SETTINGCLOSE:
            return state.merge({'IsShow':false})
        case CK_CHANGETAB:
        	return state.merge(action.payload)
        case CK_CHANGEISREQUIRED:
        	const currentState = state.toJS();
        	let selectedRow = currentState.selectedRow;
        	selectedRow.col_IsRequired = action.payload.col_IsRequired;
        	return state.set('selectedRow',selectedRow);
        case CK_ADDITEM:
            const additemCon =  {optionInfor:'',IsDelete:'是',status:'启用'}
            const index = action.payload

            /*let currEditColumnsOptions = state.toJS().selectedRow.editColumnsOptions;
            currEditColumnsOptions.splice(index+1,0,additemCon)

            let mycurrentState = state.toJS().selectedRow

            mycurrentState.editColumnsOptions = currEditColumnsOptions
            return state.set('selectedRow',mycurrentState);
*/
            return state.updateIn(['selectedRow', 'editColumnsOptions'], editColumnsOptions => {
                return editColumnsOptions.splice(index+1,0,additemCon)
            })
        default:
            return state
    }
}