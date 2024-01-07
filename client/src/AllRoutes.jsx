import React from 'react'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Questions from './pages/Questions/Questions'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import DisplayQuestion from './pages/Questions/DisplayQuestion'
import {Routes, Route} from 'react-router-dom' 

const AllRoutes = () => {
  return (
    <Routes>
    
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Auth' element={<Auth />} />
        <Route exact path='/Questions' element={<Questions />} />
        <Route exact path='/AskQuestion' element={<AskQuestion/>}/>
        <Route exact path='/Questions/:id' element={<DisplayQuestion/>}/>
    </Routes>
  )
}

export default AllRoutes