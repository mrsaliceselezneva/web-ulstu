import { Routes, Route } from "react-router-dom";
import Authorization from "./pages/Authorization/Authorization";
import Registration from "./pages/Registration/Registration";
import Main from "./pages/Main/Main";
import Timetable from "./pages/Timetable/Timetable";
import Messangers from "./pages/Messangers/Messangers";
import Projects from "./pages/Projects/Projects";
import Project from "./pages/Project/Project";
import CreateProject from "./pages/CreateProject/CreateProject";
import CreateInvestor from "./pages/CreateInvestor/CreateInvestor";

import Drawer from "./components/Drawer/Drawer";

import { useSelector } from "react-redux";
import ResponseList from "./pages/ResponseList/ResponseList";

function App() {
  const token = useSelector(state => state.userReducer.token);

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
        <Route exact path="/timetable" element={<Drawer central={<ResponseList />} page={1} />} />

        <Route exact path="/messangers" element={<Drawer central={<Messangers />} page={2} />} />

        <Route exact path="/projects" element={<Drawer central={<Projects />} page={3} />} />
        <Route exact path="/projects/project/*" element={<Drawer central={<Project />} page={3} />} />
        <Route exact path="/projects/create-project" element={<Drawer central={<CreateProject />} page={3} />} />

        <Route exact path="/events" element={<Drawer central={<Projects />} page={4} />} />
        <Route exact path="/events/event/*" element={<Drawer central={<Project />} page={4} />} />
        <Route exact path="/events/create-event" element={<Drawer central={<CreateInvestor />} page={4} />} />

        <Route exact path="/*" element={<Drawer central={<Main />} page={0} />} />
      </Routes>
    );
  }
}

export default App;