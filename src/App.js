import { Route, Routes } from 'react-router-dom';
import "./App.css";
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </>
  );
}

export default App;
