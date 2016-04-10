import { isPlainObject, isFunction, isString } from 'lodash'
import warning from 'fbjs/lib/warning'


class DivList extends React.Component{
	constructor(props) {
        super(props)
        this.handleCheckbox = this.handleCheckbox.bind(this)
    }
    componentDidMount(prevProps, prevState) {
        const checkboxInput = this.refs.checkboxInput;
        const selectedRow = this.props.mapState.toJS().selectedRow;
        // if(selectedRow['col_IsRequired']=='是'){
        //     alert(1)
        //     checkboxInput.setAttribute('checked','checked');
        // }else{
        //     alert(2)
        //     checkboxInput.removeAttribute('checked');
        // }

    }
    handleCheckbox(){
        const selectedRow = this.props.mapState.toJS().selectedRow;
        const {changeIsRequired}=this.props;
        selectedRow['col_IsRequired']=='是'?changeIsRequired({'col_IsRequired':'否'}):changeIsRequired({'col_IsRequired':'是'})
    }
    componentWillUpdate() {
        const currentTabIndex = this.props.mapState.toJS().currentTabIndex;
        const selectedRow = this.props.mapState.toJS().selectedRow;
        if(currentTabIndex==0){
            return (
                <div>
                    <ul className = "editColumnInfor">
                        <li>字段名称:{selectedRow["col_name"]}</li>
                        <li>字段类型:{selectedRow["col_type"]}</li>
                        <li>是否必填：<input type = "checkbox" ref="checkboxInput" 
                        defaultChecked={selectedRow['col_IsRequired']=='是'?'checked':''} onChange = {this.handleCheckbox}/></li>
                    </ul>
                </div>
            )
        }else if(currentTabIndex==1){
            return(
                <div>22222222222222222</div>
            )

        }
    }

	render(){
        return (
            <div>{this.componentWillUpdate()}</div>
        )
	}
}

export default DivList