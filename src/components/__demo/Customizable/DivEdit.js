import { isPlainObject, isFunction, isString } from 'lodash'
import warning from 'fbjs/lib/warning'

class DivEdit extends React.Component{
	constructor(props) {
        super(props)

    }
	handleAddItem(i){
		const {addItem} = this.props;
		addItem(i);
	}
	componentWillUpdate() {

	}

	render(){
		const editColumnsOptions = this.props.mapState.toJS().selectedRow['editColumnsOptions']
		console.log(editColumnsOptions)
		return (
			<div>
				<ul className = "editColumnsHead">
					<li className = "optionInfor">选项信息</li>
					<li className = "operation">操作</li>
					<li className="status">状态</li>
				</ul>
				<ul className = "editColumnsCon">
					{
						editColumnsOptions.map((opt,i)=>{
						return (
							<li key = {i}>
								<div className = "optionInforInput">
									<input type = 'text' defaultValue = {opt.optionInfor} placeholder = "输入文字"/>
								</div>
								<div className = "operationBtn">
									<button onClick = {this.handleAddItem.bind(this,i)}>+</button><button disabled = {opt.IsDelete=='否'?'disabled':''}>-</button>
								</div>
								<div className = "statusSelect">
									<select name = "statusSelect" >
										<option value = "0" selected ={opt.status=='启用'?'selected':''}>启用</option>
										<option value = "1" selected ={opt.status=='未启用'?'selected':''}>未启用</option>
									</select>
								</div>
							</li>
							)
						})
					}
				</ul>
			</div>
		)
	}
}

export default DivEdit