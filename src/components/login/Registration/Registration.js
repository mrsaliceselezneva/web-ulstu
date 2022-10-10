import '../Login.scss';


function Registration() {
  return (
      <div className='autinfication'>
        <div className='text-logo'>Learn.Ulstu</div>
        <div className='text-hello'>Добро пожаловать в Learn.Ulstu! </div>
        <div className='text-info'>Веб-приложение для автоматизации обучения в УлГТУ</div>
        <div className='login'>
            <div className='text-title'>Создание аккаунта</div>
            <input placeholder='email'/>
            <input placeholder='пароль'/>
            <button className='button'/>
            Есть аккаунт? Авторизация
        </div>
      </div>
  );
}

export default Registration;
