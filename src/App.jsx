import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import ToDoForm from './Component/ToDoForm';
import Navbar from './Component/Navbar';
import { ToDoProvider } from './Contaxt/ToDoContext';

function App() {
  

  return (
    <>
    <BrowserRouter>
     <ToDoProvider> 
         <Navbar/>
      <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/createTask" element={<ToDoForm />} />
      </Routes>
      </ToDoProvider>
    </BrowserRouter>
      
    </>
  )
}

export default App
