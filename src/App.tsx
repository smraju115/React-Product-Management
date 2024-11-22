import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBarComponent from './components/NavBarComponent';
import { Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import Category from './components/CategoryComponent';
import CreateNewCategory from './components/CreateCategory';

function App() {
  return (
    <>
      <NavBarComponent></NavBarComponent>
      <main className='container-fluid'>
        <Routes>
          <Route path='/home' element={<HomeComponent></HomeComponent>}></Route>
          <Route path='/category' element={<Category></Category>}></Route>
          <Route path='/create' element={<CreateNewCategory></CreateNewCategory>}></Route>
        </Routes>
      </main>

    </>
  );
}

export default App;
