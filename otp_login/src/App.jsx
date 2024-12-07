import './App.css';
import { Route, Routes } from "react-router-dom";
import PasswordManipulation from './PasswordModification/PasswordManipulation';
import ResetPassword from './ResetPassword/ResetPassword';

function App() {

  return (
    <div>


      <Routes>
        <Route path="/" element={<PasswordManipulation />} />
        <Route path="/reset/:email" element={<ResetPassword />} />
      </Routes>





    </div>
  )
}

export default App;
