import { isPlainObject, isFunction, isString } from 'lodash'
import warning from 'fbjs/lib/warning'

const COLUMN_KEY ="key"
const COLUMN_TEXT ="text"
const CLASS ="className"



class Table extends  React.Component{
	constructor(props) {
        super(props)
        this.finalColumns =[]
    }
    resolveColumnsTitle(){
        //todo: 判断字段hidden是否存在和其的值
        /* 返回表头文本数组
           ['姓名', '年龄']
         */
        return this.props.columns.map((col, i) => col['text'])
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
				</tbody>

			</table>
		)
	}
}


export default Table