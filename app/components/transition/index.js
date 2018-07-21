/**
 * 过渡组件
 * )
 */
/* eslint react/no-direct-mutation-state:0*/
/* eslint react/prop-types:0*/
import React, { Component } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'
import { withRouter, Switch } from 'react-router-dom'
import './index.less'

@withRouter
export default class Transition extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // 动画方式，默认上下淡入淡出
      // fade-ltr:左到右淡入淡出
      // fade-rtl:右到左淡入淡出
      transitionActionKey: 'fade-ltr',
    }
  }


  static propTypes = {
    children: PropTypes.array,
    // 路由组件的location
    location: PropTypes.shape({
      pathname: PropTypes.string,
    })
  }

  componentDidMount() {
    window.addEventListener('click', this.scrollIntoView)
  }
  componentWillUnmount() {
    window.removeEventListener('click', this.scrollIntoView)
  }

  scrollIntoView = (e) => {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
      setTimeout(() => {
        e.target.scrollIntoViewIfNeeded(true)
      }, 250)
    }
  }

  render() {
    // 入场和出场的时间,单位ms
    const pageTransitionDuration = {
      enter: 250,
      exit: 250,
    }
    let { transitionActionKey } = this.state

    const { location, children, history } = this.props
    // 判断是返回还是push
    if (history.action === 'PUSH') {
      transitionActionKey = 'fade-rtl'
    } else if (history.action === 'POP') {
      transitionActionKey = 'fade-ltr'
    }
    const transitionAction = `transitionAction-${transitionActionKey}`
    console.log(history.action, transitionAction)
    return (
      <TransitionGroup
        className="transition-container"
        component="div"
      >
        <CSSTransition
          key={location.pathname || '/'}
          classNames={transitionAction}
          mountOnEnter={true}
          unmountOnExit={true}
          timeout={pageTransitionDuration}
        >
          <div className="transition-wrapper">
            <Switch location={location}>{children}</Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    )
  }
}

