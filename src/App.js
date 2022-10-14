import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Drawer from "./components/Drawer/Drawer";
import MainPage from "./pages/MainPage/MainPage";
import Subjects from "./pages/Subjects/Subjects";
import Timetable from "./pages/Timetable/Timetable";



function App() {
  return (
    
    <Router>
      <Drawer>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/timetable" element={<Timetable/>} />
          <Route path="/subjects" element={<Subjects/>} />
        </Routes>
      </Drawer>
    </Router>
  );
}

export default App;
