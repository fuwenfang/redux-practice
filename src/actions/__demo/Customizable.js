import fetch from 'isomorphic-fetch'
import { routerMiddleware, push } from 'react-router-redux'

// 获取列表数据
const CK_SELECTEDROWDATA = 'CK_SELECTEDROWDATA'


/**
 * 点击列表数据
 * @param  
 * @param 
 * @returns {Function}
 */

    
export const selectedRowData = ({'selectedRow':selectedRow})=>{
    const _selectedRowData = (type, data)=> {
        return {
            type,
            payload: data
        }
    }

    return (dispatch, getState) => {
        dispatch(_selectedRowData(CK_SELECTEDROWDATA,{'selectedRow':selectedRow}))
    }

}

export {
	CK_SELECTEDROWDATA,
	selectedRowData
}

