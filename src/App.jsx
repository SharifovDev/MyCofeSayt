import Menu from './pages/Menu'
import Login from './components/Login'
import Admin from './pages/Admin'
import './App.css'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
      <Routes>
        <Route path='/' element={<Menu/>}/>
        <Route path='/admin' element={<Login/>}/>
        <Route path='/admins' element={<Admin/>}/>
      </Routes>
  )
}

export default App
