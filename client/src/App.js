import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import {store} from './store'
import Homepage from './pages/homepage/homepage'

const history = createBrowserHistory()

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/homepage" component={Homepage}></Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
