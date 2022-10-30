import { useState } from 'react';

// для таких хуков лучше сделать папку src/hooks
// токен лучше хранить в куках а не в localStorage (но в целом можно и тут, но правильней в куках)
// для работы с куками есть библиотека которая дает возможность использовать хуки для куков, ими и лучше пользоваться чем делать свои) 

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  }
}