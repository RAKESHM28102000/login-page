import { BrowserRouter as Router,Routes, Route,} from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Login from './components/Login';
import Profile from './components/Profile'
import Home from './components/Home';
import Signup from './components/Signup';
import Footer from './components/Footer';
import { useState } from 'react';
import Editpage from './components/Editpage';
import CreateProfile from './components/CreateProfile';

function App() {
  const [status,setStatus]=useState(false);
  return (
    <div>
    <Router>
      <div>
       <Navbar/>
      
         <Routes>
          <Route path="/" exact element={<Home status={status} setStatus={setStatus}/>} />
          <Route path="/login" element={<Login status={status} setStatus={setStatus}/>} />
          <Route path="/profile" element={<Profile status={status} setStatus={setStatus}/>} />
          <Route path="/create" element={<CreateProfile/>} />
          <Route path="/signup" element={<Signup status={status} setStatus={setStatus}/>} />
          <Route path="/update/:id" element={<Editpage/>} />
        </Routes>
        <Footer/>
       
      </div>
    </Router>
    </div>
  );
}

export default App;
