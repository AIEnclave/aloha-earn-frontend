import React from 'react';
import { RegistrationForm } from '../../components/forms/RegistrationForm';
import styles from './page.module.scss';

const RegisterPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Register</h1>
      <RegistrationForm />
    </div>
  );
};

export default RegisterPage;
