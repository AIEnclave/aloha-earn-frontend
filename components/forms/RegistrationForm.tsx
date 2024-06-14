'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { RegistrationData } from '../../types/auth';
import { register as registerUser } from '../../services/authService';
import styles from './RegistrationForm.module.scss';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export const RegistrationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegistrationData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<RegistrationData> = async (data: Object) => {
    try {
      await registerUser(data);
      // handle success
    } catch (error) {
      // handle error
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.registrationForm}>
      <input {...register('name')} />
      {errors.name && <p>{errors.name.message}</p>}
      
      <input {...register('email')} />
      {errors.email && <p>{errors.email.message}</p>}
      
      <input type="password" {...register('password')} />
      {errors.password && <p>{errors.password.message}</p>}
      
      <button type="submit">Register</button>
    </form>
  );
};
