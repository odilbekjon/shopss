import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Shop from './components/Shop/Shop';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Header/>}/>
        <Route path='/product' element={<Main/>} />
        <Route path='/shops/:id' element={<Shop/>} />
      </Routes>
    </>
  );
}

export default App;
