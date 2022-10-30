import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Autorization from './components/Login/Athorization/Autorization';
import Registration from './components/Login/Registration/Registration';
import Main from "./components/Main/Main";
import Timetable from "./components/Timetable/Timetable";
import Subjects from "./components/Subjects/Subjects";
import Messangers from "./components/Messangers/Messangers";
import Projects from "./components/Projects/Projects";
import Drawer from "./components/Drawer/Drawer";
//import useToken from "./useToken";
//import React, { useState } from 'react';

// работа с токеном
// При загрузке проверяется есть ли токен (лучше для этого сделать компоненту-обертку например AuthWrapper)
// если токена в куках нет то редиректим на страницу логина history.push('/login')
// пути аля /login и все прочие лучше вынести в отдельную константу, что бы проще было ими пользоваться и редактировать
// если пользователь прошел авторизацию в куки сохраняем токен
// для работы с бэком этот токен нужно запихивать в заголовок (headers) под названием Authorization (или в другой, если так бэк требует)
// для того что бы запихивать его в все запросы надо настроить axios instance
// так же токен может стухнуть - значит бэк начнет (скорее всего, зависит от бэка) возвращать статус 403 
// в axios так же можно настроить что если какой то запрос вернул 403 - то редиректим на /login



// компонента Drawer - выглядит как обертка для шапки и т д - ее лучше вынести в компоненты с страницами (их можно хранить в src/pages) и оборачивать верстку этим Drawer - если вы оборачиваете то компонент central делать не надо - можно просто рендерить пропсу children


// папка assets в компонентах никак к ним не относится, поэтому ее надо вынести в src
 function App() {

  return (
    <Router>
      <Routes>
        {/*public routes */}
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/*" element={<Autorization />} />
        {/*privat routes*/}
          <Route exact path="/" element={<Drawer central={<Main/>} page={0} />} />
          <Route exact path="/timetable" element={<Drawer central={<Timetable/>} page={1} /> } />
          <Route exact path="/subjects" element={<Drawer central={<Subjects/>} page={2} />} />
          <Route exact path="/messangers" element={<Drawer central={<Messangers />} page={3} />} />
          <Route exact path="/projects" element={<Drawer central={<Projects/>} page={4} />} />
      </Routes>
  </Router>

  );
}

export default App;