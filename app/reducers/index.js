import {
  routerReducer as routing,
} from 'react-router-redux'
import {
  combineReducers,
} from 'redux'


import * as common from './common'

import { global } from './global'

const rootReducer = combineReducers({
  routing,
  config: (state = {}) => state,
  ...common,
  global,
});

export default rootReducer
