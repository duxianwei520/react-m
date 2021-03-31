/*
 * @Author: hy 
 * @Date: 2018-05-08 15:04:03 
 * @Last Modified by: dupi
 * @Last Modified time: 2021-03-30 18:28:55
 */

// 登录

/* eslint  react/prop-types:0 */
/* eslint  no-undef:0 */
import React, { Component } from 'react'
import { WhiteSpace, InputItem, Toast, Modal } from 'antd-mobile'
import { createForm } from 'rc-form'
import {  httpLogin } from '@api/login'
import { connect } from '@components/store'
import PropTypes from 'prop-types'
import Button from "@components/button"

@connect((store) => ({
  userInfo: store.userInfo,
}))
@createForm()

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // 登录按钮是否禁用
      btnDisabled: false,
    }


  }
  componentDidMount() {

  }

  static propTypes = {
    storeHandle: PropTypes.object.isRequired,
  }

  componentWillUnmount() {
    if (this.tid) {
      clearTimeout(this.tid)
    }
  }

  /**
   * 登录
   */
  login = () => {
    this.props.form.validateFields({ force: true }, (error, values) => {
      if (error) {
        return
      }
      this.setDisabled(true)
      const reqData = values
        // 身份证登录
        httpLogin(reqData, (res) => {
          this.setDisabled(false)
          this.saveUserInfoToStore({ ...res.data, ...res.data.user })
            // 跳到app首页
            this.props.history.push('/home')
        }, error => {
          Toast.fail(error.message || error.msg || '未知错误')
          this.setDisabled(false)
             // 其它情况，跳到app首页
             this.props.history.push('/home')
        })
      })
  }

  /**
   * @description 设置登录按钮的状态
   * @memberof Login
   */
  setDisabled = (status) => {
    this.setState({
      btnDisabled: status,
    })
  }



  render() {
    const { getFieldProps, getFieldError } = this.props.form
    const { loginType, btnDisabled } = this.state
    return (
      <div className="login-wrap">
        <div className="login-header">
          <WhiteSpace size="lg" />
          <div className="login-header-text">
            <img src="resource/image/logo.png" alt="" />
          </div>
        </div>
        <div className="login-content">
          <div className= 'content-card'>
            <InputItem
              {...getFieldProps('username', {
                rules: [
                  {
                    required: true, message: '请输入账号',
                  },
                ],
              })}
              error={!!getFieldError('username')}
              onErrorClick={() => Toast.fail(getFieldError('username'), 1)}
              type="text"
              placeholder="请输入账号"
              clear
              labelNumber={2}
              maxLength={18}
            ><i className="qqbicon qqbicon-username" /></InputItem>
            <WhiteSpace size="xl" />
            <InputItem
              {...getFieldProps('password', {
                rules: [
                  {
                    required:true, message: '请输入密码'
                  },
                ],
              })}
              error={!!getFieldError('password')}
              onErrorClick={() => Toast.fail(getFieldError('password'), 1)}
              type="password"
              placeholder="请输入密码"
              clear
              labelNumber={2}
              maxLength={13}
            ><i className="qqbicon qqbicon-password" /></InputItem>
          </div>
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <Button btntype="primary" loading={btnDisabled} disabled={btnDisabled} onClick={this.login} >登录</Button>
          <WhiteSpace size="sm" />
        </div>
      </div>
    )
  }
}
