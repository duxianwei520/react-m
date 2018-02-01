
import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { pageTransition } from 'actions/common'

@connect(
  (state, props) => ({
    config: state.config,
    pageTransitionResponse: state.pageTransitionResponse,
  }),
)
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.props.dispatch(pageTransition('normal'))
    }
  }
  // region

  // endregion
  render() {
    // console.log(this.props.global)
    const { pageTransitionResponse } = this.props
    return (
      <ReactCSSTransitionGroup
        className="transition"
        component="div"
        transitionName={pageTransitionResponse.animateType || 'normal'}
        transitionEnterTimeout={400}
        transitionLeaveTimeout={400}
      >
        {React.cloneElement(this.props.children, {
          key: this.props.location.pathname,
        })}
      </ReactCSSTransitionGroup>
    );
  }
}
