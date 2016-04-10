import { isPlainObject, isFunction, isString } from 'lodash'
import warning from 'fbjs/lib/warning'



class Table extends  React.Component{
	constructor(props) {
        super(props)
        this.handleSetting = this.handleSetting.bind(this)
    }
    componentDidMount(prevProps, prevState) {
        const { getTableData } = this.props;
        getTableData();
    }
    resolveColumnsTitle(){
        //todo: 判断字段hidden是否存在和其的值
        /* 返回表头文本数组
           ['姓名', '年龄']
         */
        return this.props.columns.map((col, i) => col['text'])
    }

    resolveRows(row, index) {
        const context = this

        return (
            <tr key = {index}>
                {
                    this.props.columns.map((col, i) => {
                        const datafield = col['datafield']
                        const cellsrenderer=col['cellsrenderer']
                        return  datafield=='id'?<td key = {i} onClick={this.handleSetting.bind(this,index)}>{cellsrenderer(row, col, row[datafield])}</td>
                        :<td key = {i} >{ row[datafield] }</td> 
                    })
                }
            </tr>
        )
    }

    handleSetting(i){
    	const {selectedRowData} = this.props;
    	const selectedRow = this.props.rows[i];
    	selectedRowData({'selectedRow':selectedRow})
    }
	render(){
		return(
			<table >
				<thead>
					<tr>
                		{this.resolveColumnsTitle().map((colName, i)=><th key = {i}>{colName}</th>)}
					</tr>
				</thead>
				<tbody>
						{ this.props.rows.map(this.resolveRows.bind(this)) }
				</tbody>

			</table>
		)
	}
}


export default Table