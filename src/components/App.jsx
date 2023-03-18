
import Contacts from 'pages/ContactsPage/ContactsPage';
import HomePage from 'pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import RegisterForm from '../pages/RegisterPage/RegisterPage';
import styled from './App.module.css';
import LoginPage from 'pages/LoginPage/LoginPage';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { current } from 'redux/Auth/auth-operation';


export default function App() {
 const dispatch = useDispatch();

 useEffect(() => {
   dispatch(current())
 }, [dispatch])
 
  return (
    <div className={styled.container}>
    <Navigation/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/register' element={<RegisterForm/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
    </Routes>
    </div>
  );
}
