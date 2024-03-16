import {Route,Routes} from 'react-router-dom';
import './App.css'
import Login from './Pages/login/Login'
import SignUp from './Pages/signup/SignUp'
import Home from './Pages/home/Home'

function App() {
 

  return (
    <div className='p4 h-screen flex items-center justify-center'>
     
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/signup'element={<SignUp/>}/>
      </Routes>
    </div>
  )
}

export default App
