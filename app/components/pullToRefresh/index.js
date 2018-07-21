/**
 * 滚动到底部时，加载更多
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Divider from '@components/divider'
import { WingBlank, Icon } from 'antd-mobile'
import './index.less'

export default class PullToRefresh extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false, // 是否加载中
    }
  }

  static propTypes = {
    bottom: PropTypes.number,
    isFooter: PropTypes.bool,
    loading: PropTypes.any,
    footer: PropTypes.any,
    onRefresh: PropTypes.func,
    children: PropTypes.any,
  }
  componentDidMount() {
    this.scrollUpdate()
  }

  componentWillUnmount() {
    if (this.scrollNode) {
      // 取消滚动
      this.scrollNode.removeEventListener('scroll', this.scrollHandler, false)
    }
  }
  componentWillReceiveProps() {
    this.setState({
      isLoading: false,
    })
  }

  /**
   * 滚动监听
   */
  scrollUpdate = () => {
    if (this.scrollNode) {
      // 监听滚动
      this.scrollNode.addEventListener('scroll', this.scrollHandler, false)
    }
  }


  /**
   * @description 滚动处理
   * @returns  null
   * @memberof PullToRefresh
   */
  scrollHandler = () => {
    const { bottom = 32, isFooter = false } = this.props // 距离底部多少的时候，加载更多
    const { isLoading } = this.state
    const dist = this.scrollNode.scrollHeight - (this.scrollNode.scrollTop + this.scrollNode.offsetHeight)
    if (!isFooter && !isLoading && dist < bottom && this.props.onRefresh) {
      this.props.onRefresh()
      this.setState({
        isLoading: true,
      })
    }
  }
  render() {
    const {
      loading = <WingBlank size="lg"><Divider><Icon type="loading" />正在加载...</Divider></WingBlank>, // 加载更多
      footer = <WingBlank size="lg"><Divider>到底了</Divider></WingBlank>, // 到底提示
      isFooter = false, // 是否到底
    } = this.props
    const { isLoading } = this.state
    return (
      <div className="pullToRefresh-wrap" ref={node => this.scrollNode = node}>
        {this.props.children}
        {isFooter ? footer : null}
        {!isFooter && isLoading ? loading : null}
      </div>
    )
  }
}
