import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './pages/AddItem/AddItem';
import Home from './pages/Home/Home';
import Inventory from './pages/Inventory/Inventory';
import Login from './pages/login/Login/Login';
import Register from './pages/login/Register/Register';
import ManageItems from './pages/ManageItems/ManageItems';
import MyItems from './pages/MyItems/MyItems';
import RequireAuth from './pages/RequireAuth/RequireAuth';
import Footer from './pages/share/Footer/Footer';
import Header from './pages/share/Header/Header';
import UpdateService from './pages/UpdateService/UpdateService';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/updateservice/:id' element={
          <RequireAuth>
            <UpdateService></UpdateService>
          </RequireAuth>
        }></Route>
        <Route path='/manageitems' element={<ManageItems></ManageItems>}></Route>
        <Route path='/additem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path='/myitems' element={<MyItems></MyItems>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
