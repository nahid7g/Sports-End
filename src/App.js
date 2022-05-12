import { Route, Routes } from 'react-router-dom';
import "./App.css";
import AddNewItem from './pages/AddNewItem/AddNewItem';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Inventory from './pages/Inventory/Inventory';
import ManageInventory from './pages/ManageInventory/ManageInventory';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/add-new-item' element={<AddNewItem></AddNewItem>}></Route>
        <Route path="/manage-inventory" element={<ManageInventory></ManageInventory>}></Route>
        <Route path="/inventory/:productId" element={<Inventory></Inventory>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
