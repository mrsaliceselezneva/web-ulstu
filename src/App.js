import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Subjects from "./components/Subjects/Subjects";
import Timetable from "./components/Timetable/Timetable";

import Autorization from './components/login/Athorization/Autorization';
import Registration from './components/login/Registration/Registration';
import { useState } from "react";


function App() {
  // const [token, setToken] = useState();

  // if (!token){
  //   return (
  //     <Router>
  //     <Routes>
  //       {/*public routes*/}
  //       <Route exact path="/registration" element={<Registration />} />
  //       <Route path="/*" element={<Autorization />} />
  //     </Routes>
  // </Router>
  //   );
  // }

  return (

    <Router>
      <Routes>
        {/*public routes */}
        <Route exact path="/login" element={<Autorization />} />
        <Route exact path="/registration" element={<Registration />} />

        {/*privat routes*/}
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/timetable" element={<Timetable />} />
        <Route exact path="/subjects" element={<Subjects />} />

      </Routes >
    </Router >

  );
}

export default App;
