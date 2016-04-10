import fetch from 'isomorphic-fetch'
import { routerMiddleware, push } from 'react-router-redux'

// 获取列表数据
const CK_SELECTEDROWDATA = 'CK_SELECTEDROWDATA'

const CK_SETTINGCLOSE = 'CK_SETTINGCLOSE'

const CK_CHANGETAB = 'CK_CHANGETAB'

const CK_CHANGEISREQUIRED = 'CK_CHANGEISREQUIRED'

const     CK_TABLE_GETDATA ='CK_TABLE_GETDATA'
const     CK_TABLE_GETDATA_SUCCESS = 'CK_TABLE_GETDATA_SUCCESS'

/**
 * 点击列表数据
 * @param  
 * @param 
 * @returns {Function}
 */
 export const getTableData = () => {
    const _getTableData = (type, data)=> {
        alert(11111111)
        return {
            type,
            payload: data
        }
    }

    return (dispatch, getState) => {

        //const url = 'http://esn.chenhuangfang.com/scrmnumreport/index/tpllist/VISITID/1?filterscount=0&groupscount=0&pagenum=1&pagesize=20&recordstartindex=0&recordendindex=13&_=1458806730117'
        const url = '/actions/_demo/list.json';
        const rowData = {
        rows: [
        {col_name:'客户级别',col_type:'单选类型',col_IsRequired:'是',col_Remark:'用户自定义',id:1},
        {col_name:'所属区域',col_type:'单选类型',col_IsRequired:'否',col_Remark:'用户自定义',id:2},
        {col_name:'客户来源',col_type:'单选类型',col_IsRequired:'是',col_Remark:'用户自定义',id:3},
        {col_name:'行业分类',col_type:'单选类型',col_IsRequired:'是',col_Remark:'用户自定义',id:4}
        ]
    };

        dispatch(_getTableData(CK_TABLE_GETDATA));
        return fetch(url, {
            method: 'get',
            headers: {
                'API': 1,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response=> {
            //dispatch(_getPeopleData(CK_SEARCH_GETDATA_SUCCESS, peopleListData))
            if (response.status >= 400) {
                //dispatch(_getReportData(CK_REPORT_GETDATA_ERROR_NETWORK))
                return {};
            }
            return response.json()
        }).then(json=> {
            json = jsonData;//假数据
            //console.log(json);
            // if (json.rs) {
            //     dispatch(_getPeopleData(CK_SEARCH_GETDATA_SUCCESS, json.data))
            // } else {
            //     dispatch(_getPeopleData(CK_SEARCH_GETDATA_FAILURE))
            // }
            dispatch(_getPeopleData(CK_SEARCH_GETDATA_SUCCESS, json))
        })


    }
}

    
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

//点击关闭按钮
export const clickCloseBtn = ()=>{
    const _clickCloseBtn = (type, data)=> {
        return {
            type,
            payload: data
        }
    }

    return (dispatch, getState) => {
        dispatch(_clickCloseBtn(CK_SETTINGCLOSE))
    }

}

//切换tab

export const selectedTabIndex = ({'currentTabIndex':i})=>{

    const _selectedTabIndex = (type, data)=> {
        return {
            type,
            payload: data
        }
    }

    return (dispatch, getState) => {
        dispatch(_selectedTabIndex(CK_CHANGETAB,{'currentTabIndex':i}))
    }

}


//更改是否必填
export const changeIsRequired = (changedSatus)=>{

    const _changeIsRequired = (type, data)=> {
        return {
            type,
            payload: data
        }
    }

    return (dispatch, getState) => {
        dispatch(_changeIsRequired(CK_CHANGEISREQUIRED,changedSatus))
    }

}


export {
	CK_SELECTEDROWDATA,
    CK_SETTINGCLOSE,
    CK_CHANGETAB,
    CK_CHANGEISREQUIRED,
    CK_TABLE_GETDATA,
    CK_TABLE_GETDATA_SUCCESS,
    getTableData,
	selectedRowData,
    clickCloseBtn,
    selectedTabIndex,
    changeIsRequired
}

