import {
  routerReducer as routing,
} from 'react-router-redux'
import {
  combineReducers,
} from 'redux'


import * as common from './common'

const rootReducer = combineReducers({
  routing,
  config: (state = {}) => state,
  ...common,
});

export default rootReducer
