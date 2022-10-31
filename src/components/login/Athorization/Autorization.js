import axios from "axios";
import React, {useState} from 'react';
import logoUlstu from '../../assets/images/logo-ulstu.png';
import { FiMail, FiEye, FiEyeOff } from 'react-icons/fi';

import PropTypes from 'prop-types';

import '../Login.scss';

function Autorization() {
  const [show, setShow] = useState(false);
  const [notSuccessLogin, setNotSuccessLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordShow=()=>{
    setShow(!show);
  }

  function Check(){
      axios
      .post(`${process.env.REACT_APP_API_URL}/login`, {
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
                className="input" type={show?"text":"password"} placeholder='пароль'
              /> 
              {show? <FiEye onClick={passwordShow} className='login-icon' /> :
              <FiEyeOff onClick={passwordShow} className='login-icon' /> }
            </div>
            
            <button onClick={Check}>Войти</button>
            <div className='text-bottom'>Нет аккаунта? <a href='/registration' className='href'>Создать</a></div>
        </div>
      </div>
  );
}

export default Autorization;

