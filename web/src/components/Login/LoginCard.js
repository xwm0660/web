import React, { Component } from 'react';
import styles from './LoginCard.less'
import { Row, Col, Input, Button } from 'antd';
export default class LoginCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      account: '',
      password: '',
    }
  }
  account = (e) => {
    this.refs.accoutTip.style.display = "none"
    this.setState({ account: e.target.value })
  }
  password = (e) => {
    this.setState({ password: e.target.value })
  }
  accountCheck = () => {
    if (this.state.account == '') {
      this.refs.accoutTip.style.display = "block"
    }
  }
  passwordCheck = () => {
    if (this.state.password == '') {
      this.refs.passwordTip.style.display = "block"
    }
  }
  render() {
    return (
      <div className={styles.content}>
        <p className={styles.account}>
          <Input style={{ width: 240 }} onChange={this.account} onBlur={this.accountCheck} />
          <div className={styles.accountTip} ref='accoutTip'>账号不能为空</div>
        </p>
        <p className={styles.password}>
          <Input style={{ width: 240 }} onChange={this.password} onBlur={this.passwordCheck} type="password" />
          <div className={styles.passworldTip} ref="passwordTip">密码不能为空</div>
        </p>
        <Button style={{ width: 240, height: 30, marginBottom: 10 }} type="primary">登录</Button>
        <Button style={{ width: 240, height: 30 }}>手机注册</Button>
        <div className={styles.otherLogin}>
          <a className={styles.bindPhone}>绑定手机</a>
          <a><img src={require('../../assets/微信.png')} style={{width:20,height:20}}/></a>
        </div>
      </div>
    )
  }
}
