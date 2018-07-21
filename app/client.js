import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import {
  HashRouter as Router
} from 'react-router-dom'
import { Provider as StoreProvider } from '@components/store'
import CatchError from '@components/catchError'
import './style/index.js'
// 全局store初始值
const store = {}

ReactDOM.render(
  <StoreProvider store={store}>
    <Router>
      <CatchError>
        {Routes}
      </CatchError>
    </Router>
  </StoreProvider>
  ,
  document.getElementById('root')
)