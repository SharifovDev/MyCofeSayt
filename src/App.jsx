import Menu from './pages/Menu'
import Admin from './pages/Admin'
import Orders from './pages/Orders'
import Login from './components/Login'
import Location from './pages/Location'
import './App.css'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
      <Routes>
        <Route path='/' element={<Menu/>}/>
        <Route path='/admin12345' element={<Admin/>}/>
        <Route path='/order' element={<Orders/>}/>
        <Route path='/admin' element={<Login/>}/>
        <Route path='/location' element={<Location/>}/>
      </Routes>
  )
}

export default App
