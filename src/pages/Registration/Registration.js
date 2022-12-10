import axios from "axios";
import React, {useState} from 'react';
import logoUlstu from '../../components/assets/images/logo-ulstu.png';
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

  React.useEffect(() => {
    axios
    .get(`${process.env.REACT_APP_API_URL}//study-group/list`)
    .then((response) => {
        setListGroup(response.data);
    });
  }, []);

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
        window.location.assign(`${process.env.REACT_APP_URL}/`);
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
              className="input" type="text" placeholder='8 (888) 888-88-88'
            /> 
            <FiPhone className='login-icon' />
          </div>

          {/* группа */}
          <div className='input-block'>
            <div 
              onChange={(event) => setGroupId(event.target.value)} 
              className="input"
            >{groupName}</div>
            <FiList className='login-icon' onClick={() => setShowListGroup(!showListGroup)} />
          </div>

          {/* список групп */}
          {showListGroup ? 
              <div className="list">
                {listGroup.map((group, id) => 
                (<div 
                  className='list-block' 
                  key={group.name} 
                  onClick={() => {setGroupId(group.id); setGroupName(group.name); setShowListGroup(!showListGroup)}}
                >
                  {group.name}
                </div>))}
              </div> :
              <></>
            }

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

        {/* <div className='question'>
            <button className='question'></button>
        </div> */}
      </div>
  );
}

export default Autorization;