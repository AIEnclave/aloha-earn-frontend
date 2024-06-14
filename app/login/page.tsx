import React from 'react';
import { LoginForm } from '../../components/forms/LoginForm';
import styles from './page.module.scss';

const LoginPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
