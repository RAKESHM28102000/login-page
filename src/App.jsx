import { BrowserRouter as Router,Routes, Route,} from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Login from './components/Login';
import Profile from './components/Profile'
import Home from './components/Home';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Editpage from './components/Editpage';
import CreateProfile from './components/CreateProfile';
import ContextData from './components/ContextData';

function App() {
 
  return (
    <div>
    <Router>
    <ContextData>
      <div>
       <Navbar/>
         <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/create" element={<CreateProfile/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/update/:id" element={<Editpage/>} />
          <Route path='*' element={<Login/>}/>
        </Routes>
        <Footer/>
       
      </div>
      </ContextData>
    </Router>
    </div>
  );
}

export default App;
