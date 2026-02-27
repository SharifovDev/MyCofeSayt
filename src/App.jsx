import Menu from './pages/Menu'
import Admin from './pages/Admin'
import Orders from './pages/Orders'
import Login from './components/Login'
import './App.css'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
      <Routes>
        <Route path='/' element={<Menu/>}/>
        <Route path='/jbdvbgsdvdbusd' element={<Admin/>}/>
        <Route path='/order' element={<Orders/>}/>
        <Route path='/admin' element={<Login/>}/>
      </Routes>
  )
}

export default App
