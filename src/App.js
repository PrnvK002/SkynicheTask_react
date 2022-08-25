import { BrowserRouter ,Routes, Route } from "react-router-dom";

import './App.css';
import { Dashboard } from './Screens/Dashboard';
import { ForgotPassword } from './Screens/ForgotPassword';
import { LoginPage } from './Screens/LoginPage';
import { Header } from './Components/Header'

function App() {
  return (
    <>
        <Header />
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/forgotPassword' element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
