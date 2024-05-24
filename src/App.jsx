
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import View from './pages/View';
import Pagenotfound from './pages/Pagenotfound';


function App() {
  return (
    <div className="App">
      <Header/>
     
      <Routes>
        <Route path='/' element={<Home/>}/>
      
        <Route path='/login' element={<Register/>}/>
      <Route path='/register' element={<Register register/>}/>
      <Route path='/view' element={<View/>}/>
     

    
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
