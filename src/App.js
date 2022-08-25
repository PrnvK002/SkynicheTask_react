import { BrowserRouter , Route , Routes } from 'react-router-dom';

import './App.css';
import { Dashboard } from './Screens/Dashboard';
import { ForgotPassword } from './Screens/ForgotPassword';
import { LoginPage } from './Screens/LoginPage';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Dashboard /> } />
          <Route path='/login' element={ <LoginPage /> } />
          <Route path='/forgotPassword' element={ <ForgotPassword /> } />
        </Routes>
      
      </BrowserRouter>
  );
}

export default App;
