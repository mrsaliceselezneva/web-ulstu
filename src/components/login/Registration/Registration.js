import axios from "axios";
import React, {useState} from 'react';
import logoUlstu from '../../assets/images/logo-ulstu.png';

import '../Login.scss';

function Autorization() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordShow=()=>{
    setShow(!show);
  }

  function Check(){
    console.log(email);
    console.log(password);
      axios
      .post(`http://asus.russianitgroup.ru/api/login`, {
        login: email,
        password: password,
      })
      .then((response) => {
        if(response.data)
        console.log('yes');
      });
  };



  return (
      <div onKeyDown={event => {
          if (event.key === "Enter")
            Check();
          }} 
          className='autinfication'>
            {/* это должно быть в index.html */}
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" />
        <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" />
        <div className='text-logo'>
          {/* в качестве альтернативного текста для изображения лучше не использовать строку "альтернативный текст", и использовать текст который покажет что за картинку тут должна быть если она не подгрузилась */}
          <img src={logoUlstu} alt="альтернативный текст" />
          <div>Learn.Ulstu</div>
        </div>
        <div className='text-hello'>Добро пожаловать в Learn.Ulstu! </div>
        <div className='text-info'>Веб-приложение для автоматизации обучения в УлГТУ</div>
        <div className='login'>
          <div className='text-title'>Создание аккаунта</div>
            <div className='input-block'>
              <input 
                onChange={(event) => setEmail(event.target.value)} 
                className="input" type="email" placeholder='email@ulstu.ru'
              />      
              <i className='fa fa-envelope login-icon' />
            </div>
            
            <div className='input-block'>
              <input 
                onChange={(event) => setPassword(event.target.value)}
                className="input" type={show?"text":"password"} placeholder='пароль'
              />      
              <i onClick={passwordShow} className={show?'fa fa-eye-slash login-icon':'fa fa-eye login-icon'} />
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