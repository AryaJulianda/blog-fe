import Dashboard from "./page/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailArticle from "./page/DetailArticle";
import MyArticles from "./page/MyArticles";
import AddArticle from "./page/AddArticle";
import EditArticle from "./page/EditArticle";
import Login from "./page/Login";
import Register from "./page/Register";

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/auth/login' element={<Login/>} />
      <Route path='/auth/register' element={<Register/>} />
      <Route path='/detail/:id' element={<DetailArticle/>} />
      <Route path='/myArticles' element={<MyArticles/>} />
      <Route path='/myArticles/add' element={<AddArticle/>} />
      <Route path='/myArticles/edit/:id' element={<EditArticle/>} />
    </Routes>
  </BrowserRouter>
  )
};

export default App;

