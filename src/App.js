// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './assets/fonts/ttcfont.css';
import SignupFirst from './components/signup/signup-first';
import SignupSteep1 from './components/signup/signup-steep1';
import SignupSteep2 from './components/signup/signup-steep2';
import SignupSteep3 from './components/signup/signup-steep3';
import SignupSteep4 from './components/signup/signup-steep4';
import LogIn from "./components/login/login";

import Dashboard from "./components/dashboard/dashboard";
import CredentialSetup from "./components/credential-setup/CredentialSetup";
import ConfigureCredentials from "./components/credential-setup/configurecredentials";
import PublishCredential from "./components/credential-setup/publish-model";
import CreateInternalModel from "./components/credential-setup/create-internal-model";





import "./App.css";
import "./Default.css";
import "./Global.css";
import "./Responsive.css";


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
            <Route path="/login" element={<LogIn />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/credential" element={<CredentialSetup />} />
            <Route path="/credential/configure-credentials" element={<ConfigureCredentials />} />
            <Route path="/credential/publish-credentials" element={<PublishCredential />} />
            <Route path="/credential/create-internal-model" element={<CreateInternalModel />} />
            
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
