import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CarList from "./pages/CarList";
import CarDetails from "./pages/CarDetails";
import Header from "./components/Header";
import About from "./pages/About";
import Blogs from "./pages/Blog"
import Contact from "./pages/Contact";

function App() {
  return (
    <>
    
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About/>}/>
        <Route path ="/blogs" element={<Blogs/>}/>
        <Route path="/cars" element={<CarList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cars/:carId" element={<CarDetails />} />
      </Routes>
    </Router></>
  );
}

export default App;