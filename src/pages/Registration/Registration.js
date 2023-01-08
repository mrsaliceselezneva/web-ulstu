import axios from "axios";
import React, { useState } from 'react';
import validator from 'validator';
import logoUlstu from '../../components/assets/images/logo-ulstu.png';
import ModalCheckRegistration from "../../components/ModalCheckRegistration/ModalCheckRegistration";
import { FiMail, FiEye, FiEyeOff, FiPhone, FiUser, FiList } from 'react-icons/fi';

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
  const [listGroup, setListGroup] = useState([]);
  const [showListGroup, setShowListGroup] = useState(false);
  const [groupId, setGroupId] = useState(0);
  const [groupName, setGroupName] = useState('Группа');
  const [showModalCheckRegistration, setShowModalCheckRegistration] = useState(false);
  const [textCheckRegistration, setTextCheckRegistration] = useState('Неправильно введены данные');

  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}//study-group/list`)
      .then((response) => {
        setListGroup(response.data);
      });
  }, []);


  function Check(){
    if (firstName.length < 3 && !isNaN(+firstName)){
      console.log('lol');
      setTextCheckRegistration('Неверно введено имя');
      setShowModalCheckRegistration(true);
    }
    else if (lastName.length < 3 && !isNaN(+lastName)){
      setTextCheckRegistration('Неверно введена фамилия');
      setShowModalCheckRegistration(true);
    }
    else if (futherName.length < 3 && !isNaN(+futherName)){
      setTextCheckRegistration('Неверно введено отчество');
      setShowModalCheckRegistration(true);
    }
    else if (phone.length === 11 && isNaN(+phone) && validator.isMobilePhone(phone)){
      setTextCheckRegistration('Неверно введен номер');
      setShowModalCheckRegistration(true);
    }
    else if (!validator.isEmail(email)){
      setTextCheckRegistration('Неверно введена почта');
      setShowModalCheckRegistration(true);
    }
    else if(!validator.isStrongPassword(password) && password.length < 6){
      setTextCheckRegistration('Слабый пароль');
      setShowModalCheckRegistration(true);
    }
    else{
      axios
      .post(`http://asus.russianitgroup.ru/api//registration`, {
        email: email,
        firstName: firstName,
        gender: gender,
        lastName: lastName,
        password: password,
        patronymic: futherName,
        phone: phone,
      })
      .then((response) => {
        console.log('registration success');
        window.location.assign(`${process.env.REACT_APP_URL}/`);
      });
    }
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
        <div>Simple.Start</div>
      </div>
      <div className='text-hello'>Добро пожаловать в Simple.Start! </div>
      <div className='text-info'>Веб-приложение для удобной работы со своими проектами</div>
      
      <div className='login'>
      <ModalCheckRegistration
      showModalCheckRegistration={showModalCheckRegistration}
      textCheckRegistration={textCheckRegistration}
      onClose={() => setShowModalCheckRegistration(false)}
    />
        <div className='text-title'>Создание аккаунта</div>

          {/* фамилия */}
          <div className='input-block'>
              <input 
                onChange={(event) => setLastName(event.target.value)} 
                className="input" type="text" placeholder='Фамилия'
              /> 
              <FiUser className='login-icon' />
          </div>

          {/* имя */}
          <div className='input-block'>
          <input 
            onChange={(event) => setFirstName(event.target.value)} 
            className="input" type="text" placeholder='Имя'
          /> 
          <FiUser className='login-icon' />
          </div>

          {/* отчество */}
          <div className='input-block'>
            <input 
              onChange={(event) => setFutherName(event.target.value)} 
              className="input" type="text" placeholder='Отчество'
            /> 
            <FiUser className='login-icon' />
          </div>

          {/* пол */}
          <div className='input-block'>
            <input 
              onChange={() => setGender('MALE')} 
              type="radio"  
              name="radio"
            />
            <label className="input">муж</label>
            <input 
              onChange={() => setGender('FEMALE')} 
              type="radio"  
              name="radio"
            />
            <label className="input">жен</label>
            <FiUser className='login-icon' />
          </div>

          {/* телефон */}
          <div className='input-block'>
            <input 
              onChange={(event) => setPhone(event.target.value)} 
              className="input" type="text" placeholder='88888888888'
            /> 
            <FiPhone className='login-icon' />
          </div>

          {/* почта */}
          <div className='input-block'>
            <input 
              onChange={(event) => {
                setEmail(event.target.value);
              }} 
              className="input" type="email" placeholder='email@ulstu.ru'
            />      
            <FiMail className='login-icon' />
          </div>
          
          {/* пароль */}
          <div className='input-block'>
            <input 
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              className="input" type={show?"text":"password"} placeholder='пароль'
            /> 
            {show? <FiEye onClick={() => setShow(!show)} className='login-icon' /> :
            <FiEyeOff onClick={() => setShow(!show)} className='login-icon' /> }
          </div>

          <button onClick={Check}>Создать</button>
          <div className='text-bottom'>Есть аккаунт?<a href='/' className='href'>Войти</a></div>
        </div>
    </div>
  );
}

export default Autorization;