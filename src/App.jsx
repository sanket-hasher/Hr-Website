import './App.css'
import Career from './pages/Career';
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
