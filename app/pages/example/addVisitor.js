/*
 * @Author: hy 
 * @Date: 2018-05-05 16:30:42 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-07-06 15:21:04
 */

// 新增访客弹出框

import React, { Component } from "react"

import { Toast, InputItem, WhiteSpace, WingBlank } from "antd-mobile"
import { createForm } from "rc-form"
import PropTypes from "prop-types"
import Button from "@components/button"
import Popup from "@components/popup"
import { regExpConfig } from "@config/reg"

@createForm()
export default class pop extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  static propTypes = {
    match: PropTypes.object,
    history: PropTypes.object,
    form: PropTypes.object.isRequired,
    location: PropTypes.object,
    storeHandle: PropTypes.object,
    onClose: PropTypes.func.isRequired,
    onOk: PropTypes.func.isRequired
  }

  /**
   * @description 点击确定
   * @memberof Xzcy
   */
  onOk = () => {
    this.props.form.validateFields({ force: true }, (error, values) => {
      if (error) {
        return
      }
      console.log("点击确定", values)
      this.props.onOk && this.props.onOk(values)
    })
  }

  render() {
    const { getFieldProps, getFieldError } = this.props.form
    return (
      <Popup title="新增访客" leftText="关闭" onClickLeft={this.props.onClose}>
        <InputItem
          className="reset-inputItem"
          placeholder="姓名"
          {...getFieldProps("name", {
            rules: [{ required: true, message: "姓名" }]
          })}
          clear
          labelNumber={2}
          maxLength={50}
          error={!!getFieldError("name")}
          onErrorClick={() =>
            Toast.fail(getFieldError("name"), 2, () => {}, false)
          }
        >
          姓名
        </InputItem>
        <InputItem
          {...getFieldProps("idCardNo", {
            // 不许输入中文和字母X除外的符号
            normalize: (value, prevValue) => {
              if (!regExpConfig.isIDcardCode.test(value)) {
                return prevValue;
              }
              return value;
            },
            rules: [
              {
                required: true,
                message: "请输入身份证号"
              },
              {
                pattern: regExpConfig.IDcard,
                message: "请输入正确的18位身份证号"
              }
            ]
          })}
          error={!!getFieldError("idCardNo")}
          onErrorClick={() => Toast.fail(getFieldError("idCardNo"), 1)}
          type="text"
          placeholder="请输入身份证号"
          clear
          labelNumber={4}
          maxLength={18}
          className="reset-inputItem"
        >
          身份证号
        </InputItem>
        <WhiteSpace size="xl" />
        <WingBlank size="lg">
          <Button btntype="primary" onClick={this.onOk}>
            确定
          </Button>
        </WingBlank>
      </Popup>
    )
  }
}
