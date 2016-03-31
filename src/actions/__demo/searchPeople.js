import fetch from 'isomorphic-fetch'
import { routerMiddleware, push } from 'react-router-redux'

// 获取列表数据
const CK_SEARCH_GETDATA = 'CK_SEARCH_GETDATA'
const CK_SEARCH_GETDATA_SUCCESS = 'CK_SEARCH_GETDATA_SUCCESS'
const CK_SEARCH_GETDATA_FAILURE = 'CK_SEARCH_GETDATA_FAILURE'
const CK_SEARCH_GETDATA_ERROR_NETWORK = 'CK_SEARCH_GETDATA_ERROR_NETWORK'

//点击列表
const CK_CLICK_GETDATA = 'CK_CLICK_GETDATA'

/**
 * 获取列表数据
 * @param  
 * @param 
 * @returns {Function}
 */
export const getPeopleData = () => {
    const _getPeopleData = (type, data)=> {
        return {
            type,
            payload: data
        }
    }

    return (dispatch, getState) => {

        //const url = 'http://esn.chenhuangfang.com/scrmnumreport/index/tpllist/VISITID/1?filterscount=0&groupscount=0&pagenum=1&pagesize=20&recordstartindex=0&recordendindex=13&_=1458806730117'
        const url = '/actions/_demo/list.json';
        const jsonData = {
        data:[
        {
            "ID":"14623",
            "Name":"第一页",
            "Dept":"全公司",
            "Avatar":"http://test.staticoss.upesn.com/1/14623/201512/3/1449111464vXTV.jpg.thumb.jpg",
            "Url":"http://esn.fuwenfang.com/space/cons/index/id/14623"
        },
        {
            "ID":"4507",
            "Name":"曹海龙",
            "Dept":"全公司",
            "Avatar":"http://test.staticoss.upesn.com/1/4507/201601/18/1453080583VG6s.jpg.thumb.jpg",
            "Url":"http://esn.fuwenfang.com/space/cons/index/id/4507"
        },
        {
            "ID":"4488",
            "Name":"123456",
            "Dept":"研发部",
            "Avatar":"http://test.staticoss.upesn.com/1/4488/201508/17/1439801185r4SR.jpg.thumb.jpg",
            "Url":"http://esn.fuwenfang.com/space/cons/index/id/4488"
        },
        {
            "ID":"4487",
            "Name":"123222",
            "Dept":"研发部",
            "Avatar":"http://esn.fuwenfang.com/front/images/scrm/default_avatar.png",
            "Url":"http://esn.fuwenfang.com/space/cons/index/id/4487"
        },
        {
            "ID":"4472",
            "Name":"刘王芳",
            "Dept":"全公司",
            "Avatar":"http://esn.fuwenfang.com/front/images/scrm/default_avatar.png",
            "Url":"http://esn.fuwenfang.com/space/cons/index/id/4472"
        },
        {
            "ID":"4400",
            "Name":"测试3",
            "Dept":"全公司",
            "Avatar":"http://esn.fuwenfang.com/front/images/scrm/default_avatar.png",
            "Url":"http://esn.fuwenfang.com/space/cons/index/id/4400"
        },
        {
            "ID":"4339",
            "Name":"刘王芳",
            "Dept":"全公司",
            "Avatar":"http://test.staticoss.upesn.com/1/4339/201505/29/1432867053YB20.jpg.thumb.jpg",
            "Url":"http://esn.fuwenfang.com/space/cons/index/id/4339"
        },
        {
            "ID":"4214",
            "Name":"aa",
            "Dept":"考勤测试部门",
            "Avatar":"http://esn.fuwenfang.com/front/images/scrm/default_avatar.png",
            "Url":"http://esn.fuwenfang.com/space/cons/index/id/4214"
        },
        {
            "ID":"4194",
            "Name":"bb",
            "Dept":"考勤测试部门",
            "Avatar":"http://esn.fuwenfang.com/front/images/scrm/default_avatar.png",
            "Url":"http://esn.fuwenfang.com/space/cons/index/id/4194"
        }
        ]
    }

        dispatch(_getPeopleData(CK_SEARCH_GETDATA));

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

/**
 * 点击列表数据
 * @param  
 * @param 
 * @returns {Function}
 */

    
export const clickPeopleDate = ({"itemdata":itemdata,"areaPadding":InittextareaPadding})=>{
    const _clickPeopleDate = (type, data)=> {
        return {
            type,
            payload: data
        }
    }

    return (dispatch, getState) => {
        dispatch(_clickPeopleDate(CK_CLICK_GETDATA,{"itemdata":itemdata,"areaPadding":InittextareaPadding}))
    }

}
export {
    CK_SEARCH_GETDATA,
    CK_SEARCH_GETDATA_SUCCESS,
    CK_SEARCH_GETDATA_FAILURE,
    CK_SEARCH_GETDATA_ERROR_NETWORK,
    CK_CLICK_GETDATA,
    getPeopleData,
    clickPeopleDate
}