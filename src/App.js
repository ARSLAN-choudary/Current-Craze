import './App.css'
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {Route,Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
  const pageSize=15;
  const state={
    progress:0
  }
  const[progress,setProgress]=useState(0)
 


    return (
      <div>
        
      <Navbar/>
      <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
        
      />
        <Routes>
          <Route path='/' element={<News setProgress={setProgress}key="General" pageSize={pageSize} country='in' category='General'/>} ></Route>
          <Route path='/Business'element={<News setProgress={setProgress}key="Business" pageSize={pageSize} country='in' category='Business'/>} ></Route>
          <Route path='/Entertainment'element={<News setProgress={setProgress}key="Entertainment" pageSize={pageSize} country='in' category='Entertainment'/>}></Route>
          <Route path='/Health' element={<News setProgress={setProgress}key=" Health" pageSize={pageSize} country='in' category='Health'/>}></Route>
          <Route path='/Science'element={<News setProgress={setProgress}key="Science" pageSize={pageSize} country='in' category='Science'/>}></Route>
          <Route path='/Sports'element={<News setProgress={setProgress}key="Sports" pageSize={pageSize} country='in' category='Sports'/>}></Route>
          <Route path='/Technology'element={<News setProgress={setProgress}key="Technology" pageSize={pageSize} country='in' category='Technology'/>}></Route>
        </Routes>
      
       
      </div>
    )
 
}

export default App;