/**
 * Created by c on 16/3/21.
 */
import { Route, IndexRoute } from 'react-router'

import IndexPage from 'containers/IndexPage'
import NoMatch from 'containers/NoMatch'
import DemoTablePage from 'containers/__demo/TablePage'
import DemoLoginPage from 'containers/__demo/LoginPage'
import DemoSearchPage from 'containers/__demo/SearchPage'
import CustomizablePage from 'containers/__demo/CustomizablePage'


export default (
    <Route path="/" component={IndexPage}>
        <Route path="__demo">
            <Route path="table" component={DemoTablePage}/>
            <Route path="login" component={DemoLoginPage}/>
            <Route path="search" component={DemoSearchPage}/>
            <Route path="customizable" component={CustomizablePage}/>
        </Route>
        <Route path="*" component={NoMatch}/>
    </Route>
)