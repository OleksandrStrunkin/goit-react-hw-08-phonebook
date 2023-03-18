import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fields from './Fields';
import { logIn } from 'redux/Auth/auth-operation';
import styled from './LoginPage.module.css'
import { Navigate } from 'react-router-dom';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const isLogin = useSelector(store => store.auth.isLogin)
  

  const handleEmail = e => {
    setEmail(e.currentTarget.value);
  };

  const handlePassword = e => {
    setPassword(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  if(isLogin){
    return <Navigate to='/contacts'/>
  }
  return (
    <form onSubmit={handleSubmit} className={styled.fields}>
      <label className={styled.label}>
        Пошта
        <input {...fields.email} value={email} onChange={handleEmail} />
      </label>
      <label className={styled.label}>
        Пароль
        <input {...fields.password} value={password} onChange={handlePassword} />
      </label>
      <button type="submit" className={styled.btn}>Увійти</button>
    </form>
  );
}