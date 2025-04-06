import './App.css'
import Career from './pages/Career';
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";


function App() {


  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career/>} />
        </Routes>
      </HashRouter>

    </>
  )
}

export default App
