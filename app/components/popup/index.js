/*
 * @Author: hy 
 * @Date: 2018-04-28 14:14:28 
 * @Last Modified by: hy
 * @Last Modified time: 2018-06-21 09:31:46
 */

// 弹出层


import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import NavBar from '@components/navbar'
// import { Icon } from 'antd-mobile'
import './index.less'


const modalRoot = document.getElementById('modal-root')

export default class Popup extends Component {

  constructor(props) {
    super(props)

    this.state = {
      // 是否显示
      visible: false,
      // 动画类
      classNames: ['qqb-popup-container', 'popup-content'],
    }
    // 退出时的动画类
    this.exitClassNames = ['qqb-popup-container exit', 'popup-content exit']
    // 动画时间
    this.exitTime = 250
    // 挂载的节点
    this.element = document.createElement('div')
  }

  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onClickLeft: PropTypes.func,
    history: PropTypes.object,
    title: PropTypes.string.isRequired,
    rightText: PropTypes.string,
    leftText: PropTypes.string,
    onClickRight: PropTypes.func,
  }


  componentDidMount() {
    modalRoot.appendChild(this.element)
  }

  componentWillUnmount() {
    try {
      modalRoot.removeChild(this.element)
    } catch (error) {
      // ...
    }
  }

  /**
   * @description 点击关闭，退出
   * @memberof Popup
   */
  onClose = () => {
    this.setState({
      classNames: this.exitClassNames,
    }, () => {
      setTimeout(() => {
        try {
          modalRoot.removeChild(this.element)
        } catch (error) {
          // ...
        }
        this.props.onClickLeft && this.props.onClickLeft()
      }, this.exitTime)
    })
  }

  render() {
    const { classNames } = this.state
    const {
      title = '请取名',
      children,
      rightText,
      onClickRight,
      leftText,
    } = this.props
    return ReactDOM.createPortal(
      <div className={classNames[0]} >
        <div className={classNames[1]}>
          <NavBar
            title={title}
            left={leftText}
            right={rightText}
            onClickLeft={leftText ? this.onClose : () => { }}
            onClickRight={onClickRight}
          />
          <div className="page-except-header-content">
            {children}
          </div>
        </div>
      </div>
      , this.element)
  }
}


/*
 * @Author: hy 
 * @Date: 2018-04-28 14:14:28 
 * @Last Modified by: hy
 * @Last Modified time: 2018-05-07 16:20:09
 */

// 弹出层
// 先使用这种吧。createPortal目前还没解决左划删除的问题。..

// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import NavBar from '@components/navbar'
// // import { Icon } from 'antd-mobile'
// import './index.less'

// export default class Popup extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       classNames: ['qqb-popup-container', 'popup-content'],
//     }
//     // 退出时的动画类
//     this.exitClassNames = ['qqb-popup-container exit', 'popup-content exit']
//     // 动画时间
//     this.exitTime = 250
//   }

//   static propTypes = {
//     children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
//     onClickLeft: PropTypes.func,
//     history: PropTypes.object,
//     title: PropTypes.string.isRequired,
//     rightText: PropTypes.string,
//     leftText: PropTypes.string,
//     onClickRight: PropTypes.func,
//   }

//   // ios position fixed 问题临时解决方案
//   componentWillMount() {
//     if (document.querySelectorAll('.app-navbar')) {
//       Array.prototype.slice.call(document.querySelectorAll('.app-navbar')).forEach(node => {
//         node.style.zIndex = -1
//       })
//     }
//   }

//   // ios position fixed 问题临时解决方案
//   componentWillUnmount() {
//     const navbars = Array.prototype.slice.call(document.querySelectorAll('.app-navbar'))
//     if (navbars && navbars.length) {
//       navbars.forEach((node, index) => {
//         if (navbars.length > 2 && index === 0) {
//           node.style.zIndex = -1
//         } else {
//           node.style.zIndex = 999
//         }
//       })
//     }
//   }

//   /**
//    * @description 点击关闭，退出
//    * @memberof Popup
//    */
//   onClose = () => {
//     this.setState({
//       classNames: this.exitClassNames,
//     }, () => {
//       setTimeout(() => {
//         this.props.onClickLeft && this.props.onClickLeft()
//       }, this.exitTime)
//     })
//   }
//   render() {
//     const { classNames } = this.state
//     const {
//       title = '请取名',
//       children,
//       rightText,
//       onClickRight,
//       leftText,
//     } = this.props

//     return (
//       <div className={classNames[0]} >
//         <div className={classNames[1]}>
//           <NavBar
//             title={title}
//             left={leftText === '关闭' ? <i className="qqbicon qqbicon-back" /> : leftText}
//             right={rightText}
//             onClickLeft={leftText ? this.onClose : () => { }}
//             onClickRight={onClickRight}
//           />
//           <div className="page-except-header-content">
//             {children}
//           </div>
//         </div>

//       </div>
//     )
//   }
// }

