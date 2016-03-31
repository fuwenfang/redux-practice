import React ,{ Component, PropTypes ,findDOMNode} from 'react'


export  default  class ConfirmForm extends Component{
	render(){
		return (
			<div className = "m_btn01 clearfix">
	            <div className="m_btn01L" >确认</div>
	            <div className="m_btn01R">取消</div>
	        </div>
		)
	}	
} 