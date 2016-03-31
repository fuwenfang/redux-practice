import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Search from 'components/__demo/Search/Search.less'

import PeopleTitle from 'components/__demo/search/PeopleTitle'
import PeopleSearch from 'components/__demo/search/PeopleSearch'
import PeopleList from 'components/__demo/search/PeopleList'
import ConfirmForm from 'components/__demo/search/ConfirmForm'

import { getPeopleData,clickPeopleDate } from 'actions/__demo/searchPeople'


class SearchPage extends React.Component{
	render(){
		const {dispatch, getPeopleData, clickPeopleDate,mapState } = this.props;
		return (
		  <div className="mbox_BombBox" >
			 <div className = "mbox784" >
		        <PeopleTitle/>
		        <PeopleSearch/>
		        <PeopleList getPeopleData = {getPeopleData} mapState = {mapState} clickPeopleDate={clickPeopleDate}/>
		        <ConfirmForm/>
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
    clickPeopleDate
})(SearchPage)