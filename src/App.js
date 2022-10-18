import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Drawer from "./components/Drawer/Drawer";
import MainPage from "./pages/MainPage/MainPage";
import Subjects from "./pages/Subjects/Subjects";
import Timetable from "./pages/Timetable/Timetable";

import Autorization from './components/login/Athorization/Autorization';
import Registration from './components/login/Registration/Registration';


function App() {
  return (

    <Router>
      <Routes>
        <Route exact path="/login" element={<Autorization />} />
        <Route exact path="/registration" element={<Registration />} />
          <Route path="/" element={<MainPage/>} />
          <Route path="/timetable" element={<Timetable/>} />
          <Route path="/subjects" element={<Subjects/>} />
      </Routes>
  </Router>

  );
}

export default App;
