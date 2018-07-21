
/**
 * 
 * store 连接装饰器
 * 使用react context的Consumer
 * 功能：
 * 使组件和store连接起来，并赋予对应组件设置方法和对应的属性
 */
import React from 'react'
import StoreContext from './context'

const connect = (mapStoreToProps) => (TargetClass) => {
  return props => (
    <StoreContext.Consumer>
      {value =>
        <TargetClass
          {...props}
          storeHandle={{ setStore: value.setStore, clearStore: value.clearStore }}
          {...mapStoreToProps(value.store)}
        />
      }
    </StoreContext.Consumer>
  )
}


export default connect