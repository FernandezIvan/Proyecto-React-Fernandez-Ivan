import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/itemListeContainer,js';

function App(){
  return(
    <div className="App">
      <Navbar />
      <ItemListContainer greeting= 'Que necesitas'/>
      </div>
  );
}

export default App;
