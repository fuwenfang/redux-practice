import Immutable from 'immutable'
import {CK_TABLE_GETDATA, CK_TABLE_GETDATA_SUCCESS,CK_SELECTEDROWDATA,CK_SETTINGCLOSE,CK_CHANGETAB,CK_CHANGEISREQUIRED} from 'actions/__demo/Customizable'

export default function Customizable(state = Immutable.Map({'rows':[],'selectedRow':{},'IsShow':false,'currentTabIndex':0}), action) {
    switch(action.type) {
    	case CK_TABLE_GETDATA:
    		return state
    	case CK_TABLE_GETDATA_SUCCESS:
alert(345667)    		
return state.merge(action.payload)
        case CK_SELECTEDROWDATA:
            return state.merge(action.payload,{'IsShow':true})
        case CK_SETTINGCLOSE:
            return state.merge({'IsShow':false})
        case CK_CHANGETAB:
        	return state.merge(action.payload)
        case CK_CHANGEISREQUIRED:
        	let currentState = state.toJS();
        	let selectedRow = currentState.selectedRow;
        	selectedRow.col_IsRequired = action.payload.col_IsRequired;
        	return state.set('selectedRow',selectedRow);
        default:
            return state
    }
}