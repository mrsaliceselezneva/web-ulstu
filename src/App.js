import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Autorization from './components/Login/Athorization/Autorization';
import Registration from './components/Login/Registration/Registration';
import Main from "./components/Main/Main";
import Timetable from "./components/Timetable/Timetable";
import Subjects from "./components/Subjects/Subjects";
import Messangers from "./components/Messangers/Messangers";
import Projects from "./components/Projects/Projects";
import Drawer from "./components/Drawer/Drawer";
import useToken from "./useToken";
import React, { useState } from 'react';


function App() {
  
  const { token, setToken } = useState();
  // const [token, setToken] = useState();

  

  return (
    <Router>
      <Routes>
        {/*privat routes*/}
          <Route exact path="/" element={<Drawer central={<Main/>} />} />
          <Route exact path="/timetable" element={<Drawer central={<Timetable/>} /> } />
          <Route exact path="/subjects" element={<Drawer central={<Subjects/>} />} />
          <Route exact path="/messangers" element={<Drawer central={<Messangers/>} />} />
          <Route exact path="/projects" element={<Drawer central={<Projects/>} />} />
      </Routes>
  </Router>

  );
}

export default App;