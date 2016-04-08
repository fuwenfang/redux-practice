import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Table from 'components/__demo/Customizable'
import { selectedRowData} from 'actions/__demo/Customizable'


let columns = [
    {text: '客户名称', datafield: 'col_name', width: 230},
    {text: '客户类型', datafield: 'col_type', width: 70},
    {text: '是否必填', datafield: 'col_IsRequired', width: 160},
    {text: '备注说明', datafield: 'col_Remark', width: 160},
    {text: '操作', datafield: 'id', width: 265, cellsrenderer: function(rowData, column, value){
        // this -> 所在行<Tr/>
        return (
            <div>
                <button>设置</button>
            </div>

        )
    }
    }
];

let rows = [
    {col_name:'客户级别',col_type:'单选类型',col_IsRequired:'是',col_Remark:'用户自定义',id:1},
    {col_name:'所属区域',col_type:'单选类型',col_IsRequired:'是',col_Remark:'用户自定义',id:2},
    {col_name:'客户来源',col_type:'单选类型',col_IsRequired:'是',col_Remark:'用户自定义',id:3},
    {col_name:'行业分类',col_type:'单选类型',col_IsRequired:'是',col_Remark:'用户自定义',id:4}

]

class CustomizablePage extends  React.Component{
	render(){
        const {selectedRowData} = this.props;
		return (
            <div>
                <Table className="table table-hover"
                   columns={columns}
                   rows = {rows} 
                   selectedRowData = {selectedRowData}
                 >
                 </Table>

                 <div className = "columnsSetting">
                    <div className = "columnsSettingHead">

                    </div>
                 </div>

            </div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
    return {
        mapState: state.Customizable
    }
}

export default connect(mapStateToProps, {
    selectedRowData
    
})(CustomizablePage)