import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Post from './components/pages/Post';
import LoginForm from './components/pages/LoginForm';
import RegisterForm from './components/pages/RegisterForm';
// import '../src/style.css'


function App() {
  return (
      <>
      
     <BrowserRouter>
     
     <Navbar/>
     <Routes>

       <Route path='/' element={<Home />} ></Route>
       <Route path='/contact' element={<Contact/>}></Route>
       <Route path='/about' element={<About />}></Route>
       <Route path='/post/:category' element={<Post />}></Route>
       <Route path='/login' element={<LoginForm />}></Route>
       <Route path='/signup' element={<RegisterForm/>}></Route>
       <Route path='*' element={<h1>Error Page Not Found</h1>}></Route>
     </Routes>
     
     </BrowserRouter>
 

      </>
  );
}

export default App;
