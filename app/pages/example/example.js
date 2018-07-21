/*
 * @Author: hy 
 * @Date: 2018-05-14 10:59:36 
 * @Last Modified by: hy
 * @Last Modified time: 2018-06-12 11:47:35
 */

// 示例页面

import React, { Component } from "react"
import BackNavbarPage from "@components/backNavbarPage"
import PropTypes from "prop-types"
import { WhiteSpace, List } from "antd-mobile"
import AddVisitor from "./addVisitor"

export default class Qtbbgl extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // 显示新增访客弹出框
      showVisitor: false,
      // 访客列表
      visitorList: []
    }
  }

  static propTypes = {
    history: PropTypes.object.isRequired
  }

  /**
   * @description 显示新增弹框
   * @memberof Qtbbgl
   */
  onClickRight = () => {
    this.setState({
      showVisitor: true
    });
  }

  /**
   * 关闭新增弹框
   */
  onClose = () => {
    this.setState({
      showVisitor: false
    })
  }

  /**
   * 新增访客
   */
  onOk = item => {
    const { visitorList } = this.state
    visitorList.push(item)
    this.setState({
      visitorList
    });
    this.onClose();
  }

  render() {
    const { showVisitor, visitorList } = this.state
    return (
      <BackNavbarPage
        title="示例页面"
        rightText="新增"
        onClickRight={this.onClickRight}
      >
        <div className="example-wrap">
          <h2>这里是示例页面</h2>
          <List>
            {visitorList.map(item => (
              <List.Item key={item.idCardNo} extra={item.idCardNo}>
                {item.name}
              </List.Item>
            ))}
          </List>
        </div>
        {showVisitor ? (
          <AddVisitor onOk={this.onOk} onClose={this.onClose} />
        ) : null}
      </BackNavbarPage>
    )
  }
}
