
/**
 * craete context
 */
import React from 'react'

const StoreContext = React.createContext({
  store: {},
  setStore: () => { },
})

export default StoreContext