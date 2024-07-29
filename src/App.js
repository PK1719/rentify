import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import AddListing from './pages/AddListing';
import Listing from './pages/Listing'
import Listings from './pages/Listings';
import UpdateListing from './pages/UpdateListing';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addlisting" element={<AddListing />} />
          <Route path="/listing" element={<Listings />} />
          <Route path="/updatelisting/:id" element={<UpdateListing />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
