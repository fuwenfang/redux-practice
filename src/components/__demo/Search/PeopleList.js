import React ,{ Component, PropTypes ,findDOMNode} from 'react'
let InittextareaPadding = 0;
export  default class PeopleSearch extends Component{
	constructor(props) {
        super(props)
        this.haddleClick = this.haddleClick.bind(this)
    }	
    componentDidMount(prevProps, prevState) {
        const { getPeopleData } = this.props;
        getPeopleData();
        
    }
    haddleClick(e){
        e.preventDefault();
        const myLiName = ReactDOM.findDOMNode(this.refs.myLiName);

        const myLiNameText = myLiName.innerHTML;
        const ele = e.currentTarget
        const value = this.index
        alert(value);
        let itemWidth = 11;
        for(let j = 0; j<myLiNameText.length;j++){
          //汉字
          if(myLiNameText.charCodeAt(j) > 255){
            itemWidth += 12;
          }else{
            itemWidth += 6;
          }
        };

        InittextareaPadding +=itemWidth;


        const { clickPeopleDate } = this.props;
        let itemdata = [];
        itemdata.push({"itemName":myLiNameText,"itemWidth":itemWidth});
        clickPeopleDate({"itemdata":itemdata,"areaPadding":InittextareaPadding});
        
    }
	render(){
    const { mapState }  = this.props;
	console.log(1928389);
    console.log(mapState.toJS());
    const peopleListData = mapState.toJS().data;
		return (
	        <div className="mbox_BombBoxList01"  ref = "ListBox">
	          <ul className="clearfix m_list02" >
                {
                    peopleListData.map((item, i) => {
                        return (
	                        <li  ref = "myLi" key={i} onClick={this.haddleClick} >
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