
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, InputItem, Button } from 'antd-mobile'
import { createForm } from 'rc-form'
import { pageTransition } from 'actions/common'

@createForm()

@connect(
  (state, props) => ({})
)

export default class Login extends Component {
  // 初始化页面常量 绑定事件方法
  constructor(props, context) {
    super(props)
    this.state = {
      loading: false,
    }
  }

  componentWillMount() {

  }

  // region
  handleClick = () => {
    this.customFocusInst.focus();
  }
  // endregion

  render() {
    const { getFieldProps } = this.props.form
    // console.log(this.props)
    return (
      <div className="login">
        <List renderHeader={() => '登录'}>
          <InputItem
            {...getFieldProps('autofocus')}
            clear
            placeholder="用户名"
            ref={el => this.autoFocusInst = el}
          >用户名</InputItem>
          <InputItem
            {...getFieldProps('focus')}
            clear
            placeholder="密码"
            ref={el => this.customFocusInst = el}
          >密码</InputItem>
          <List.Item>
            <div>
              <Button
                type="primary"
                href="#/welcome"
                onClick={() => this.props.dispatch(pageTransition('left'))}
              >登录</Button>
            </div>
          </List.Item>
        </List>


      </div>
    )
  }
}
