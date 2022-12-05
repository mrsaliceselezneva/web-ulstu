import axios from "axios";
import React, { useState } from 'react';
import logoUlstu from '../../components/assets/images/logo-ulstu.png';
import { FiMail, FiEye, FiEyeOff } from 'react-icons/fi';

import { useSelector, useDispatch } from "react-redux";
import { loginToken, loginFirstName, loginLastName, loginFutherName, loginGroup } from "../../redux/slices/userSlice";
import PropTypes from 'prop-types';

import '../../components/Login/Login.scss';

function Authorization() {
  const dispatch = useDispatch();
  const { token, firstName, lastName, futherName, group } = useSelector(state => state.userReducer);

  const [show, setShow] = useState(false);
  const [notSuccessLogin, setNotSuccessLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function Check() {
    axios
      .post(`${process.env.REACT_APP_API_URL}/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        setNotSuccessLogin(false);
        dispatch(loginToken(response.data.token));
        localStorage.setItem('token', response.data.token);
        console.log('login success');
        // window.location.assign(`${process.env.REACT_APP_URL}/`);
      })
      .catch((error) => {
        console.log(error);
        setNotSuccessLogin(true);
        console.log('email or password not correct');
      });
  };



  return (
    <div onKeyDown={event => {
      if (event.key === "Enter")
        Check();
    }}
      className='autinfication'>
      <div className='text-logo'>
        <img src={logoUlstu} alt="альтернативный текст" />
        <div>Learn.Ulstu</div>
      </div>
      <div className='text-hello'>Добро пожаловать в Learn.Ulstu! </div>
      <div className='text-info'>Веб-приложение для автоматизации обучения в УлГТУ</div>
      <div className='login'>
        <div className='text-title'>Авторизация</div>
        {notSuccessLogin &&
          <div className="notSuccessLogin">Неверный email или пароль</div>
        }
        <div className='input-block'>
          <input
            onChange={(event) => {
              setEmail(event.target.value);
              setNotSuccessLogin(false);
            }}
            className="input" type="email" placeholder='email@ulstu.ru'
          />
          <FiMail className='login-icon' />
        </div>

        <div className='input-block'>
          <input
            onChange={(event) => {
              setPassword(event.target.value);
              setNotSuccessLogin(false);
            }}
            className="input" type={show ? "text" : "password"} placeholder='пароль'
          />
          {show ? <FiEye onClick={() => setShow(!show)} className='login-icon' /> :
            <FiEyeOff onClick={() => setShow(!show)} className='login-icon' />}
        </div>

        <button onClick={Check}>Войти</button>
        <div className='text-bottom'>Нет аккаунта? <a href='/registration' className='href'>Создать</a></div>
      </div>
    </div>
  );
}

export default Authorization;