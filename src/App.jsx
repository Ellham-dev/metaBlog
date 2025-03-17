import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/About'
import SinglePost from './pages/SinglePost'

const App = () => {
  return (
    <>
    <Routes>
    <Route element={<RootLayout/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='blog' element={<Blog/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='singlepost' element={<SinglePost/>}/>
    </Route>
    </Routes>
    </>
  )
}

export default App