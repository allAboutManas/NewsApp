
import './App.css';
import Nav from './Components/Nav';
import NewsCard from './Components/NewsCard';
import { useState } from 'react';
function App() {
  const [nav,SetNav]= useState("top");

  return (
    <>
    
    <Nav nav={nav} SetNav={SetNav} ></Nav>
    <NewsCard nav={nav} SetNav={SetNav} ></NewsCard>
    </>
  );
}

export default App;
