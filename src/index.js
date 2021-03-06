/**
 * Created by c on 16/3/21.
 */
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from 'store/configureStore'
import Root from 'containers/Root'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Root store={store} history={history}/>,
    document.getElementById('root')
)