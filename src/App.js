import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import CountryPage from "./pages/CountryPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/:params' element={<CountryPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
