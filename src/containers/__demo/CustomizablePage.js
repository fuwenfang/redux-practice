import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Table from 'components/__demo/Customizable'

let columns = [
    {text: '客户名称', datafield: 'col_name', width: 230},
    {text: '客户类型', datafield: 'col_type', width: 70},
    {text: '是否必填', datafield: 'col_IsRequired', width: 160},
    {text: '备注说明', datafield: 'col_Remark', width: 160},
    {text: '操作', datafield: 'ID', width: 265, cellsrenderer: function(rowData, column, value){
        // this -> 所在行<Tr/>
        return (
            <div>
                <button>详情</button>
            </div>

        )
    }
    }
];


class CustomizablePage extends  React.Component{
	render(){
		return (
            <Table className="table table-hover"
                   columns={columns} >
            </Table>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
    return {
        mapState: state.Customizable
    }
}

export default connect(mapStateToProps, {
    
})(CustomizablePage)