import { Routes, Route } from "react-router-dom";
import Authorization from "./pages/Authorization/Authorization";
import Registration from "./pages/Registration/Registration";
import Main from "./pages/Main/Main";
import Timetable from "./pages/Timetable/Timetable";
import Messangers from "./pages/Messangers/Messangers";
import Projects from "./pages/Projects/Projects";
import Project from "./pages/Project/Project";
import Events from "./pages/Events/Events";
import Event from "./pages/Event/Event";
import Notifications from "./pages/Notifications/Notifications";
import CreateProject from "./pages/CreateProject/CreateProject";
import Profile from "./pages/Profile/Profile";

import Drawer from "./components/Drawer/Drawer";

import ResponseList from "./pages/ResponseList/ResponseList";

import React from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { loginFirstName, loginLastName, loginFutherName, loginGroup, loginEmail, loginToken } from "./redux/slices/userSlice";

function App() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.userReducer.token);

  React.useEffect(() => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
        .get(`${process.env.REACT_APP_API_URL}/user`, { headers })
        .then((response) => {
        })
        .catch((error) => {
            console.log('check not success');
                dispatch(loginToken('unauthorized'));
                dispatch(loginFirstName('unauthorized'));
                dispatch(loginLastName('unauthorized'));
                dispatch(loginFutherName('unauthorized'));
                dispatch(loginEmail('unauthorized'));
                dispatch(loginGroup('unauthorized'));
                dispatch(loginToken('unauthorized'));
                localStorage.clear();
        });
    }, []);

  if (token === 'unauthorized') {
    return (
      <Routes>
        {/* public routes */}
        <Route exact path="/registration" element={<Registration />} />
        <Route exact path="/*" element={<Authorization />} />
      </Routes>
    );
  }
  else {
    return (
      <Routes>
        {/*privat routes*/}

        <Route exact path="/messangers" element={<Drawer central={<Messangers />} page={1} />} />

        <Route exact path="/projects" element={<Drawer central={<Projects />} page={2} />} />
        <Route exact path="/projects/project/*" element={<Drawer central={<Project />} page={2} />} />
        <Route exact path="/projects/create-project" element={<Drawer central={<CreateProject />} page={2} />} />

        <Route exact path="/events" element={<Drawer central={<Events />} page={3} />} />
        <Route exact path="/events/event/*" element={<Drawer central={<Event />} page={3} />} />

        <Route exact path="/notifications" element={<Drawer central={<Notifications />} page={4} />} />

        <Route exact path="/profile" element={<Drawer central={<Profile />} page={5} />} />

        <Route exact path="/*" element={<Drawer central={<Main />} page={0} />} />
      </Routes>
    );
  }
}

export default App;