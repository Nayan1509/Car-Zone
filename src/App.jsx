import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CarList from "./pages/CarList";
import CarDetails from "./pages/CarDetails";
import Header from "./components/Header";

function App() {
  return (
    <>
    
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cars" element={<CarList />} />
        <Route path="/cars/:carId" element={<CarDetails />} />
      </Routes>
    </Router></>
  );
}

export default App;