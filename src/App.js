import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import Home from "./pages/home";
import Profile from "./pages/profile";
import Navbar from "./components/navbar";

function App() {
return (
  <div>
   <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element= {<Home />} />
      <Route path="/profile" element= {<Profile />}  />
      <Route path="*" element= {<h1 id ="errorurl"> page not found</h1>} />    
    </Routes>
   </Router>
  </div>
);
}

export default App;
