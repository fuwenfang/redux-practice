import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Search from 'components/__demo/Search/Search.less'

import PeopleTitle from 'components/__demo/search/PeopleTitle'
import PeopleSearch from 'components/__demo/search/PeopleSearch'
import PeopleList from 'components/__demo/search/PeopleList'
import ConfirmForm from 'components/__demo/search/ConfirmForm'

import { getPeopleData,clickPeopleDate,clickPeopleTag ,deletePeopleTag,searchPeopleData,submitData} from 'actions/__demo/searchPeople'


class SearchPage extends React.Component{
	render(){
		const {dispatch, getPeopleData, clickPeopleDate,clickPeopleTag ,deletePeopleTag,
			searchPeopleData,submitData,mapState } = this.props;
		const isShow  = mapState.toJS().IsShow;
		return (
		  <div className="mbox_BombBox " style={{display: isShow? 'block':'none'}}>
			 <div className = "mbox784" >
		        <PeopleTitle/>
		        <PeopleSearch mapState = {mapState} clickPeopleTag ={clickPeopleTag} deletePeopleTag={deletePeopleTag} searchPeopleData = {searchPeopleData}/>
		        <PeopleList getPeopleData = {getPeopleData} mapState = {mapState} clickPeopleDate={clickPeopleDate}/>
		        <ConfirmForm submitData={submitData} mapState = {mapState}/>
		      </div>
	      </div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
    return {
        mapState: state.searchPeople
    }

}

export default connect(mapStateToProps, {
    getPeopleData,
    clickPeopleDate,
    clickPeopleTag,
    deletePeopleTag,
    searchPeopleData,
    submitData
})(SearchPage)