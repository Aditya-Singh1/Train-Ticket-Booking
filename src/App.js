import './App.css'

import React from 'react'
import Search from './Componenet/Search';
import Selectyourclass from './Componenet/Selectyourclass';
import Yourticket from './Componenet/Yourticket';
import Avilabletrain from './Componenet/Avilabletrain';

 function App() {
  return (
    <div className="App">
  
     <Search/>
     <Avilabletrain/>
     <Selectyourclass/>
     <Yourticket/>
    
    </div>
  );
}

export default App;
