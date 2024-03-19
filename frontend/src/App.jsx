import {Route,Routes} from 'react-router-dom';
import './App.css'
import Login from './Pages/login/Login'
import Register from './Pages/signup/Register'
import Home from './Pages/home/Home'

function App() {
 

  return (
    <div className='p4 h-screen flex items-center justify-center'>
     
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/signup'element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App
