// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './assets/fonts/ttcfont.css';
import SignupFirst from './components/signup/signup-first';
import SignupSteep1 from './components/signup/signup-steep1';
import SignupSteep2 from './components/signup/signup-steep2';
import SignupSteep3 from './components/signup/signup-steep3';
import SignupSteep4 from './components/signup/signup-steep4';
import Dashboard from './components/dashboard/dashboard';

import "./App.css";
import "./Default.css";
import "./Global.css";
import "./Responsive.css";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<SignupFirst/>} />
            <Route path="/signup-steep1" element={<SignupSteep1 />} />
            <Route path="/signup-steep2" element={<SignupSteep2 />} />
            <Route path="/signup-steep3" element={<SignupSteep3 />} />
            <Route path="/signup-steep4" element={<SignupSteep4 />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
