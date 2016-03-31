import React ,{ Component, PropTypes ,findDOMNode} from 'react'


export  default class PeopleSearch extends Component{
	render(){
		const nameItemData = [];
		return (
			<div className="mbox784_textwrap">
	          <textarea id="textarea" rows="1" className="M01text" ref = "searchtext"></textarea>
	          <p className = "dev-tags">
		          {
		          	nameItemData.map((item,i)=>{
		          		return (
            				<span className ="nameSpan" ref="nameSpan" key = {i}>{item}</span>
		          		)
		          	})
		          }
	          </p>
	        </div>
		)
	}	
} 
