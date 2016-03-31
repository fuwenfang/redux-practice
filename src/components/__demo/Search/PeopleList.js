import React ,{ Component, PropTypes ,findDOMNode} from 'react'


export  default class PeopleSearch extends Component{
	constructor(props) {
        super(props)
    }	
    componentDidMount(prevProps, prevState) {
        const { getPeopleData } = this.props;
        getPeopleData();
        
    }
	render(){

	console.log(1928389);
    console.log(this.props.mapState);
	const peopleListData = [
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
        }
	];
		return (
	        <div className="mbox_BombBoxList01"  ref = "ListBox">
	          <ul className="clearfix m_list02" >
                {
                    peopleListData.map((item, i) => {
                        return (
	                        <li  ref = "myLi" key={i}>
                    	       <a href="#" target="_blank"><img src={item.Avatar} width="60" height="60" /></a>
					          <h5 ref = "myLiName">{item.Name}</h5>
					          <div className="zhiwei"><a href="#" target="_blank">{item.Dept}</a></div>
	                        </li>
                        )
                    })
                }
	          </ul>
	        </div>
		)
	}
	
} 