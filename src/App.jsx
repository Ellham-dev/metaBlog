import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/About'
import SinglePost from './pages/SinglePost'
import Contact from './pages/Contact'
import Pages from './pages/Pages'

const App = () => {
  return (
    <>
    <Routes>
    <Route element={<RootLayout/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='blog' element={<Blog/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='pages' element={<Pages/>}/>
    <Route path='singlepost' element={<SinglePost/>}/>
    <Route path='postCard' element={<SinglePost/>}/>
    </Route>
    </Routes>
    </>
  )
}

export default App