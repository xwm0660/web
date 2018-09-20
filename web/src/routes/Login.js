import React from 'react';
import { connect } from 'dva';
import styles from './Login.less';
import LoginCard from '../components/Login/LoginCard'
function Login() {
  return (
    <div className={styles.normal}>
      <LoginCard />
    </div>
  );
}

Login.propTypes = {
};

export default connect()(Login);
