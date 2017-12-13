import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { routerActions } from 'react-router-redux'
import { Drawer, List, NavBar } from 'antd-mobile'

@connect(
    (state, props) => ({ config: state.config }),
    (dispatch) => ({ actions: bindActionCreators(routerActions, dispatch), dispatch: dispatch })
)
export default class LeftNav extends Component {

  constructor(props, context) {
    super(props, context)

    const { pathname } = props.location
    this.state = {
      current: pathname,
      open: false,
      position: 'left',
    }
    this.onOpenChange = this.onOpenChange.bind(this)
  }

  onOpenChange(isOpen) {
    console.log(isOpen);
    this.setState({ open: !this.state.open });
  }

  render() {
    const { location, children } = this.props
    // console.log('this.props.location', this.props.location)
    const sidebar = (<List>
      {[...Array(20).keys()].map((i, index) => {
        if (index === 0) {
          return (<List.Item key={index}
            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
            multipleLine
          >分类</List.Item>);
        }
        return (<List.Item key={index}
          thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
        >分类{index}</List.Item>);
      })}
    </List>);

    const drawerProps = {
      position: this.state.position,
    }
    return (
      <div className="letNav">
        {/*<NavBar iconName="ellipsis" onLeftClick={this.onOpenChange}>基本</NavBar>
        <Drawer
          className="my-drawer"
          sidebar={sidebar}
          open={this.state.open}
          dragHandleStyle={{ display: 'none' }}
          contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
          {...drawerProps}
        >
          
        </Drawer>*/}
      </div>
    )
  }
}
