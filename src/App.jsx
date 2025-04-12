import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation.jsx'
import ProductSection from './components/ProductSection.jsx';

function App() {
  

  return (
    <>
      <div>
        <Navigation/>
        <ProductSection/>
      </div>
    </>
  )
} ;

export default App;
