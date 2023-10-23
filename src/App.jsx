import Dashboard from "./page/Dashboard";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to='/dashboard' replace={true} /> } />
      <Route path='/dashboard' element={<Dashboard/>} />
    </Routes>
  </BrowserRouter>
  )
};

export default App;

