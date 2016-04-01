import React ,{ Component, PropTypes ,findDOMNode} from 'react'
let InittextareaPadding = 0;
let itemdata = [];
export  default class PeopleSearch extends Component{
	constructor(props) {
        super(props)
        this.haddleClick = this.haddleClick.bind(this)
    }	
    componentDidMount(prevProps, prevState) {
        const { getPeopleData } = this.props;
        getPeopleData();
        
    }
    haddleClick(i){
       const myLiNameText = this.props.mapState.toJS().data[i].Name;
       let itemdata = this.props.mapState.toJS().itemdata;
       let InittextareaPadding = this.props.mapState.toJS().areapadding;

        let itemWidth = 11;
        for(let j = 0; j<myLiNameText.length;j++){
          //汉字
          if(myLiNameText.charCodeAt(j) > 255){
            itemWidth += 12;
          }else{
            itemWidth += 6;
          }
        };
        let namearr = [];
        if(itemdata.length>0){
            for(let i = 0; i<itemdata.length;i++){
                 namearr.push(itemdata[i].itemName);                
            }
            if(namearr.indexOf(myLiNameText)<0){
                itemdata.push({"itemName":myLiNameText,"itemWidth":itemWidth});
                InittextareaPadding +=itemWidth;
            }
        }else{
            itemdata.push({"itemName":myLiNameText,"itemWidth":itemWidth});
            InittextareaPadding +=itemWidth;
        }
       
        const { clickPeopleDate } = this.props;
        clickPeopleDate({"itemdata":itemdata,"areapadding":InittextareaPadding});
        
    }
	render(){
    const { mapState }  = this.props;
	
    const peopleListData = mapState.toJS().data;
		return (
	        <div className="mbox_BombBoxList01"  >
	          <ul className="clearfix m_list02">
                {
                    peopleListData.map((item, i) => {
                        return (
	                        <li key={i} onClick={this.haddleClick.bind(this,i)} >
                    	       <a href="#" target="_blank"><img src={item.Avatar} width="60" height="60" /></a>
					          <h5 >{item.Name}</h5>
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