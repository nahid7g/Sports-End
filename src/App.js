import { Route, Routes } from 'react-router-dom';
import "./App.css";
import AddNewItem from './pages/AddNewItem/AddNewItem';
import Login from './pages/Authentication/Login/Login';
import Register from './pages/Authentication/Register/Register';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Inventory from './pages/Inventory/Inventory';
import ManageInventory from './pages/ManageInventory/ManageInventory';
import RequireAuth from './pages/RequireAuth/RequireAuth';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/add-new-item' element={
          <RequireAuth>
            <AddNewItem></AddNewItem>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/manage-inventory" element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>
        <Route path="/inventory/:productId" element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
