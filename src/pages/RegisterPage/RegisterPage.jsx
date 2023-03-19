import { useState } from 'react';
import { useDispatch } from 'react-redux';
import fields from './Fields';
import { register } from 'redux/Auth/auth-operation';
import styled from './RegisterPage.module.css'


export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  

  const handleName = e => {
    setName(e.currentTarget.value);
  };

  const handleEmail = e => {
    setEmail(e.currentTarget.value);
  };

  const handlePassword = e => {
    setPassword(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className={styled.fields}>
      <label className={styled.label}>
        Ім'я
        <input {...fields.name} value={name} onChange={handleName} />
      </label>
      <label className={styled.label}>
        Пошта
        <input {...fields.email} value={email} onChange={handleEmail} />
      </label>
      <label className={styled.label}>
        Пароль
        <input {...fields.password} value={password} onChange={handlePassword} />
      </label>
      <button type="submit" className={styled.btn}>Зарєструватись</button>
    </form>
  );
}