import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Videos from './Components/Videos';
import UploadVideo from './Components/UploadVideo';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

function App() {
  return (
    <>
    <Router>
    <Header/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/videos' element={<Videos/>}/>
       <Route path='/upload' element={<UploadVideo/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/signUp' element={<SignUp/>}/>
      </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
