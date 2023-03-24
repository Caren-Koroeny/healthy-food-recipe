import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import MealList from '../containers/MealList';
import MealDetails from '../containers/MealDetails';
import Error from './Error';
import '../styles/main.css';
import About from './About';

const App = () => (
  <div className="body">
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<MealList />} />
        <Route path="/Meal/:id" element={<MealDetails />} />
        <Route exact path="About" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
