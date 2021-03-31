import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import { Provider as StoreProvider } from '@components/store'

import './style/index.js'
// 全局store初始值
const store = {}

ReactDOM.render(
  <StoreProvider store={store}>
    {Routes}
  </StoreProvider>
  ,
  document.getElementById('root')
)