'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { LoginCredentials } from '../../types/auth';
import { login } from '../../services/authService';
import { useAuth } from '../../hooks/useAuth';
import styles from './LoginForm.module.scss';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

export const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginCredentials>({
    resolver: yupResolver(schema),
  });

  const { login: twitterLogin } = useAuth();

  const onSubmit: SubmitHandler<LoginCredentials> = async (data) => {
    try {
      await login(data);
      // handle success
    } catch (error) {
      // handle error
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
      <input {...register('email')} />
      {errors.email && <p>{errors.email.message}</p>}
      
      <input type="password" {...register('password')} />
      {errors.password && <p>{errors.password.message}</p>}
      
      <button type="submit">Login</button>
      
      <button type="button" onClick={() => twitterLogin('twitter')}>
        Login with Twitter
      </button>
    </form>
  );
};
