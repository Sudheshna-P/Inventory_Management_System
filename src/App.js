import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './Components/NavBar';
import Inventory from './Components/Inventory';
import Stationery from './Components/Stationery';
import Electronics from './Components/Electronics';
import Footwear from './Components/Footwear';
import Signinup from './Components/Signinup';
import Home from './Components/Home';

function App() {

  const[showNavBar, setShowNavBar]=useState(true);
  const[showInventory, setInventory]=useState(true);
  const[showElectronics, setElectronics]=useState(true);
  const[showStationery, setStationery]=useState(true);
  const[showFootwear, setFootwear]=useState(true);

  return (
    <div className='main'>
      <Signinup/>
      <Home/>
      {
            showNavBar === true?(<NavBar />):<h1>No NavBar</h1>
      }

      {
            showInventory === true?(<Inventory />):<h1>No Inventory</h1>
      }

      {
            showElectronics === true?(<Electronics />):<h1>No Inventory</h1>
      }

      {
            showStationery === true?(<Stationery />):<h1>No Inventory</h1>
      }

      {
            showFootwear === true?(<Footwear />):<h1>No Inventory</h1>
      }
    </div>
  );
}

export default App;
