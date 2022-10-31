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