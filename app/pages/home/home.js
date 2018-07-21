/*
 * @Author: hy 
 * @Date: 2018-05-02 09:52:10 
 * @Last Modified by: hy
 * @Last Modified time: 2018-05-16 21:31:03b4038
 */

/* eslint  react/prop-types:0*/
import React, { Component } from 'react'
import { WingBlank, WhiteSpace } from 'antd-mobile'
import UserInfo from './userinfo'
import NavBar from '@components/navbar'
import Drawer from '@components/drawer'
import { connect } from '@components/store'

@connect((store) => ({
  userInfo: store.userInfo,
}))
export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      // 显示抽屉
      showDrawer: false,
      // 首页数据
      homeData: [
        {
          icon: 'resource/image/home/16.png',
          text: '示例app',
          route: '/example',
          enable: true,
          hide: false,
        },
      ]
    }
  }

  componentDidMount() {
    setTimeout(() => {
      const appNavber = document.querySelector('.home-wrap>.app-navbar')
      if (appNavber) {
        appNavber.style.zIndex = 999
      }
    }, 300)
  }
  /**
   * @description 点击一个模块
   * @memberof Home
   */
  onClick = (item) => {
    if (item && item.enable && item.route) {
      this.props.history && this.props.history.push(item.route)
    }
  }

  /**
   * @description 个人中心
   * @memberof Home
   */
  onShowDrawer = (drawerStatus) => {
    this.setState({
      showDrawer: drawerStatus,
    })
  }

  render() {
    let { homeData, showDrawer } = this.state
    const { userInfo = {} } = this.props
    if (userInfo.role === 'cm') {
      ///隐藏入出港检查
      homeData[homeData.length - 1].hide = true
    } else {
      // 显示
      homeData[homeData.length - 1].hide = false
    }
    //过滤隐藏de
    homeData = homeData.filter(item => !item.hide)
    return (
      <div className="page-wrap home-wrap" >
        <NavBar
          title="直播应用"
          left={<i className='qqbicon qqbicon-user' />}
          onClickLeft={() => this.onShowDrawer(true)}
        />
        {
          showDrawer ?
            <Drawer onClose={() => this.onShowDrawer(false)}>
              <UserInfo />
            </Drawer>
            : null
        }
        <div className="page-except-header-content">
          <WingBlank size="lg">
            <WhiteSpace size="xl" />
            <div className="home-list-box">
              {
                homeData.map((item) => {
                  const result = (
                    <div className="home-list-item" style={!item.enable ? { filter: 'opacity(50%) grayscale(100%)' } : {}} key={item.route} onClick={() => this.onClick(item)}>
                      <img src={item.icon} alt="" className="list-item-icon" />
                      <p className="list-item-text">{item.text}</p>
                    </div>
                  )
                  return result
                })
              }
            </div>
          </WingBlank>
        </div>
      </div>
    )
  }
}