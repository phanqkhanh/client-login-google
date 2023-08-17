import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Oauth from './pages/Oauth';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="login/oauth" element={<Oauth />} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
