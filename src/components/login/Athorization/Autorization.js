import axios from "axios";
import React, { useState } from 'react';
import logoUlstu from '../../assets/images/logo-ulstu.png';

import '../Login.scss';

function Autorization() {
  const [show, setShow] = useState(false);
  const [notSuccessLogin, setNotSuccessLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordShow = () => {
    setShow(!show);
  }

  function Check() {
    axios
      .post(`http://asus.russianitgroup.ru/api/login`, {
        login: email,
        password: password,
      })
      .then((response) => {
        setNotSuccessLogin(false);
        console.log('login success');
      })
      .catch((error) => {
        setNotSuccessLogin(true);
        console.log('email or password not correct');
      });
  };



  return (

    <div onKeyDown={event => {
      if (event.key == "Enter")
        Check();
    }}
      className='autinfication'>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" />
      <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" />
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
          <i className='fa fa-envelope login-icon' />
        </div>

        <div className='input-block'>
          <input
            onChange={(event) => {
              setPassword(event.target.value);
              setNotSuccessLogin(false);
            }}
            className="input" type={show ? "text" : "password"} placeholder='пароль'
          />
          <i onClick={passwordShow} className={show ? 'fa fa-eye-slash login-icon' : 'fa fa-eye login-icon'} />
        </div>

        <button onClick={Check}>Войти</button>
        <div className='text-bottom'>Нет аккаунта? <a href='/registration' className='href'>Создать</a></div>

      </div>

      <div className='input-block'>
        <input
          onChange={(event) => {
            setPassword(event.target.value);
            setNotSuccessLogin(false);
          }}
          className="input" type={show ? "text" : "password"} placeholder='пароль'
        />
        <i onClick={passwordShow} className={show ? 'fa fa-eye-slash login-icon' : 'fa fa-eye login-icon'} />
      </div>

      <button onClick={Check}>Войти</button>
      <div className='text-bottom'>Нет аккаунта? <a href='/registration' className='href'>Создать</a></div>
    </div>

  );
}

export default Autorization;
