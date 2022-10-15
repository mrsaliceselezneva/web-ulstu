import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import Autorization from './components/login/Athorization/Autorization';
import Registration from './components/login/Registration/Registration';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Autorization />} />
        <Route exact path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
