/*
 * @Author: hy 
 * @Date: 2018-04-28 15:18:58 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-06-30 20:44:09
 */

 // 个人中心

import React, { Component } from 'react'
import PropType from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { httpLogout } from '@api/login'
import { Toast, Button, WhiteSpace,} from 'antd-mobile'
import { connect } from '@components/store'

@connect((store) => ({
  userInfo: store.userInfo,
}))
@withRouter
export default class UserInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // 按钮状态
      btnStatus: false,
    }
  }

  static propTypes = {
    hasCMZ: PropType.bool,
    history: PropType.object.isRequired,
    userInfo: PropType.object.isRequired,
    storeHandle: PropType.object.isRequired,
  }

  /**
 * @description 退出登录
 * @memberof Home
 */
  logout = () => {
    const reqData = {}
    this.setState({
      btnStatus: true,
    })
    httpLogout(reqData, () => {
      this.setState({
        btnStatus: false,
      })
      this.clearStore()
      this.props.history.push('/login')
    }, error => {
      this.setState({
        btnStatus: false,
      })
      Toast.fail(error.message || error.msg || '未知错误')
      this.clearStore()
      this.props.history.push('/login')
    })
  }

  // 清空用户信息
  clearStore = () => {
    this.props.storeHandle.clearStore()
  }

  render() {
    const {
      iconUrl = '', // 头像路径
      phonenum = '无', // 手机号
    } = this.props.userInfo || {}
    const { btnStatus } = this.state
    return (
      <div className="user-info-pop">
        <div className="userInfo-header">
          <div className="userInfo-header-avatar">
            <img src={iconUrl || 'resource/image/self-user.png'} alt="头像" />
          </div>
          <WhiteSpace size="lg" />
          <p className="userInfo-header-text">{phonenum}</p>
        </div>
        <div className="userInfo-content">
          <div className="list-item">
            <p>更改用户名</p>
            <a onClick={this.onGoGGHM} >点击前往</a>
          </div>
        </div>
        <div className="userInfo-footer">
          <Button onClick={this.logout} disabled={btnStatus} loading={btnStatus}><i className="qqbicon qqbicon-off" />退出登录</Button>
        </div>
      </div>
    )
  }
}