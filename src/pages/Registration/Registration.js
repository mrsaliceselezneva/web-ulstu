import axios from "axios";
import React, {useState} from 'react';
import logoUlstu from '../../components/assets/images/logo-ulstu.png';
import { FiMail, FiEye, FiEyeOff, FiPhone } from 'react-icons/fi';

import '../../components/Login/Login.scss';

function Autorization() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [gender, setGender] = useState('MALE');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [futherName, setFutherName] = useState('');
  const [phone, setPhone] = useState('');
  const [groupId, setGroupId] = useState(0);

  const passwordShow=()=>{
    setShow(!show);
  }

  function Check(){
      axios
      .post(`http://asus.russianitgroup.ru/api//registration`, {
        email: email,
        firstName: firstName,
        gender: gender,
        lastName: lastName,
        password: password,
        patronymic: futherName,
        phone: phone,
        studyGroupId: groupId,
      })
      .then((response) => {
        console.log('registration success');
      });
  };



  return (
      <div onKeyDown={event => {
          if (event.key === "Enter")
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
          <div className='text-title'>Создание аккаунта</div>

          <div className='input-block'>
              <input 
                onChange={(event) => setLastName(event.target.value)} 
                className="input" type="text" placeholder='Фамилия'
              /> 
            </div>

            <div className='input-block'>
              <input 
                onChange={(event) => setFirstName(event.target.value)} 
                className="input" type="text" placeholder='Имя'
              /> 
            </div>

            <div className='input-block'>
              <input 
                onChange={(event) => setFutherName(event.target.value)} 
                className="input" type="text" placeholder='Отчество'
              /> 
            </div>

            <div className='input-block'>
              <input 
                onChange={(event) => setPhone(event.target.value)} 
                className="input" type="text" placeholder='8 (888) 888-88-88'
              /> 
              <FiPhone className='login-icon' />
            </div>

            <div className='input-block'>
              <input 
                onChange={(event) => {
                  setEmail(event.target.value);
                }} 
                className="input" type="email" placeholder='email@ulstu.ru'
              />      
              <FiMail className='login-icon' />
            </div>
            
            <div className='input-block'>
              <input 
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                className="input" type={show?"text":"password"} placeholder='пароль'
              /> 
              {show? <FiEye onClick={passwordShow} className='login-icon' /> :
              <FiEyeOff onClick={passwordShow} className='login-icon' /> }
            </div>

            <button onClick={Check}>Создать</button>
            <div className='text-bottom'>Есть аккаунт?<a href='/' className='href'>Войти</a></div>
        </div>

        {/* <div className='question'>
            <button className='question'></button>
        </div> */}
      </div>
  );
}

export default Autorization;