import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <div classname = "App">
      <BrowserRouter>
      <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
      </div>
  );
}

export default App;
