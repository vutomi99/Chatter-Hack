import {Navigate, Route,Routes} from 'react-router-dom';
import './App.css'
import Login from './Pages/login/Login'
import Register from './Pages/signup/Register'
import Home from './Pages/home/Home'
import {Toaster} from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';

function App() {
 
  const {authUser} = useAuthContext();

  return (
    <div className='p4 h-screen flex items-center justify-center'>
     
     <Routes>
				<Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <Register />} />
			</Routes>
      <Toaster/>
    </div>
  )
}

export default App
