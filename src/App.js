import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authorization from "./pages/Authorization/Authorization";
import Registration from "./pages/Registration/Registration";
import Main from "./pages/Main/Main";
import Timetable from "./pages/Timetable/Timetable";
import Subjects from "./pages/Subjects/Subjects";
import Messangers from "./pages/Messangers/Messangers";
import Projects from "./pages/Projects/Projects";
import Project from "./pages/Project/Project";
import CreateProject from "./pages/CreateProject/CreateProject";
import CreateInvestor from "./pages/CreateInvestor/CreateInvestor";

import Drawer from "./components/Drawer/Drawer";

import { useSelector } from "react-redux";
import { loginToken } from "./redux/slices/userSlice";

//import useToken from "./useToken";
//import React, { useState } from 'react';


function App() {
  const token = useSelector(state => state.userReducer.token);

  if (token === 'unauthorized') {
    return (
      <Routes>

        {/* public routes */}
        <Route exact path="/registration" element={<Registration />} />
        <Route exact path="/*" element={<Authorization />} />
        {/*privat routes */}
        {/* <Route exact path="/" element={<Drawer central={<Main />} page={0} />} />
        <Route exact path="/timetable" element={<Drawer central={<Timetable />} page={1} />} />
        <Route exact path="/subjects" element={<Drawer central={<Subjects />} page={2} />} />
        <Route exact path="/messangers" element={<Drawer central={<Messangers />} page={3} />} />
        <Route exact path="/projects" element={<Drawer central={<Projects />} page={4} />} /> */}
      </Routes>



    );
  }
  else {
    return (
      <Routes>
        {/*privat routes*/}
        <Route exact path="/timetable" element={<Drawer central={<Timetable />} page={1} />} />
        <Route exact path="/subjects" element={<Drawer central={<Subjects />} page={2} />} />
        <Route exact path="/messangers" element={<Drawer central={<Messangers />} page={3} />} />
        <Route exact path="/projects" element={<Drawer central={<Projects />} page={4} />} />
        <Route exact path="/projects/project/12345" element={<Drawer central={<Project />} page={4} />} />
        <Route exact path="/projects/create-project" element={<Drawer central={<CreateProject />} page={4} />} />
        <Route exact path="/projects/create-investor" element={<Drawer central={<CreateInvestor />} page={4} />} />
        <Route exact path="/*" element={<Drawer central={<Main />} page={0} />} />
      </Routes>
    );
  }
}

export default App;