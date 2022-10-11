import React, {useState} from 'react';
import logoUlstu from '../../assets/images/logo-ulstu.png';
import emailImg from '../../assets/images/email.png';

import '../Login.scss';

function Autorization() {
  const [show, setShow] = useState(false);
  const passwordShow=()=>{
    setShow(!show);
  }

  function Clack(){
    console.log(300);
  }

  return (
      <div className='autinfication'>
        <div className='text-logo'>
          <img src={logoUlstu} alt="альтернативный текст" />
          <div>Learn.Ulstu</div>
        </div>
        <div className='text-hello'>Добро пожаловать в Learn.Ulstu! </div>
        <div className='text-info'>Веб-приложение для автоматизации обучения в УлГТУ</div>
        <div className='login'>
          <div className='text-title'>Авторизация</div>
            <div className='email'>
              <img src={emailImg} alt='email' className='img'/>
              <input placeholder='email@ulstu.ru'/>
            </div>
            <input type={show?"text":"password"} placeholder='пароль' 
            
            />
            <label onClick={passwordShow} className={show?"password_show":"password"}></label>
            <button onClick={Clack}>Войти</button>
            <div className='text-bottom'>Нет аккаунта?<a href='#' className='href'>Создать</a></div>
        </div>
      </div>
  );
}

export default Autorization;
