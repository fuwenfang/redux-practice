import React ,{ Component, PropTypes ,findDOMNode} from 'react'
let InittextareaPadding = 0;
let itemdata = [];
let iStart=0;
let iTop=0;
let scrollBool=false;
//let ReactDOM.findDOMNode(this.refs.mListUl).scrollTop=0;    //刷新时，还原内容位置，如果不想还原，此处应该修改滚动条的坐标。

export  default class PeopleSearch extends Component{
	constructor(props) {
        super(props)
        this.haddleClick = this.haddleClick.bind(this);

    }	
    componentDidMount(prevProps, prevState) {
        const { getPeopleData } = this.props;
        getPeopleData();
        const BombBoxList = ReactDOM.findDOMNode(this.refs.BombBoxList);
        const dRight = ReactDOM.findDOMNode(this.refs.dRight);
        const mListUl = ReactDOM.findDOMNode(this.refs.mListUl);
        const scrollBar = ReactDOM.findDOMNode(this.refs.scrollBar);

        const mouseWheel=(/firefox/i.test(navigator.userAgent))?'DOMMouseScroll':'mousewheel';

        if(BombBoxList.attachEvent){
            BombBoxList.attachEvent('on'+mouseWheel,this.wheel);

        }
        else if(BombBoxList.addEventListener){
            BombBoxList.addEventListener(mouseWheel,this.wheel,false);

        }
        
        
        BombBoxList.onmouseover=function(){
            dRight.style.display = 'block';
            
            if(mListUl.scrollHeight>mListUl.clientHeight)
            {//计算滚动条滑块的长度
                scrollBar.style.height=mListUl.clientHeight*dRight.clientHeight/mListUl.scrollHeight+'px';
                scrollBool=true;
            }
            else
            {//内容小于可视区时，隐藏滚动条
                dRight.style.visibility='hidden';
                scrollBool=false;
            }
        };
        BombBoxList.onmouseout=function(){
            dRight.style.display = 'none';
        };
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
    clickBarDoMove(e){
        const dRight = ReactDOM.findDOMNode(this.refs.dRight);
        const mListUl = ReactDOM.findDOMNode(this.refs.mListUl);
        const scrollBar = ReactDOM.findDOMNode(this.refs.scrollBar);

        if(scrollBool==false) return;
        e=e||window.event;
        var y=e.clientY-iStart+iTop;
        if(y<0)
        {
            y=0;
        }//滚动条的移动区域
        else if(y>dRight.clientHeight-scrollBar.clientHeight)
        {
            y=dRight.clientHeight-scrollBar.clientHeight;
        }
        var h=dRight.clientHeight-scrollBar.clientHeight;
        var yh=y/h*(mListUl.scrollHeight-mListUl.clientHeight)    //内容随滚动条滚动
        scrollBar.style.top=y+'px';
        mListUl.scrollTop=yh;
    }

    stopMove(){
        const dRight = ReactDOM.findDOMNode(this.refs.dRight);
        const mListUl = ReactDOM.findDOMNode(this.refs.mListUl);
        const scrollBar = ReactDOM.findDOMNode(this.refs.scrollBar);

        if(scrollBar.releaseCapture)
            scrollBar.releaseCapture();
        else
        {
            document.removeEventListener('mousemove',this.doMove,true);
            document.removeEventListener('mouseup',this.stopMove,true);
        }
        scrollBar.onmousemove=null;
        scrollBar.onmouseup=null;
        scrollBool=false;
    }
    wheel(e){
        const dRight = ReactDOM.findDOMNode(this.refs.dRight);
        const mListUl = ReactDOM.findDOMNode(this.refs.mListUl);
        const scrollBar = ReactDOM.findDOMNode(this.refs.scrollBar);

        if(scrollBool==false) return;
        e=e||window.event;
        var detail=e.wheelDelta?e.wheelDelta:e.detail*(-120);
        var y=mListUl.scrollTop;
        var h=mListUl.scrollHeight-mListUl.clientHeight;
        y=detail>=120?y-30:y+30;
        if(y<0) y=0;
        else if(y>h) y=h;
        var yh=y/h*(dRight.clientHeight-scrollBar.clientHeight);
        mListUl.scrollTop=y;
        if(yh<0) yh=0;
        scrollBar.style.top=yh+'px';
    }

	render(){
    const { mapState }  = this.props;
	
    const peopleListData = mapState.toJS().data;
		return (
	        <div className="mbox_BombBoxList01"  ref = "BombBoxList" }>
	          <ul className="clearfix m_list02" ref = 'mListUl'>
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
              <div id="dRight" ref = "dRight" onClick = {this.clickBarDoMove}>
                    <div id="scrollBar" ref = "scrollBar"></div>
             </div>
	        </div>
		)
	}
	
}  