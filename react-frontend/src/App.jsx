import React from 'react'
import Header from './pages/header/Header'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import NoMatch from './pages/noMatch/NoMatch'
import AddEmployee from './pages/employee/AddEmployee'
import UpdateEmployee from './pages/employee/UpdateEmployee'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='*' element={<NoMatch/>}/>
         <Route path='/employee' element={<AddEmployee/>}/>
          <Route path='/employee/:id' element={<UpdateEmployee/>}/>
        

      </Routes>

    </div>
  )
}

export default App