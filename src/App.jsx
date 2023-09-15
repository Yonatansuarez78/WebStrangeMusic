import './App.css'
import Home from './components/Home/Home'
import PlayList from './components/PlayList/PlayList'
import NotFound from './components/Notfound/NotFound'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/playlist' element={<PlayList/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
