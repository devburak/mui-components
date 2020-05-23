import React,{useState} from 'react';
import './App.css';
import Deneme from 'deneme';
import {LoadingButton} from 'buttonloading'

function App() {
  const progressprops = {color:"primary", size:24}
  const [isBusy,setBusy] = useState(true)

  return (
    <div className="App">
      <header className="App-header">
      <Deneme />
      <button onClick={()=>setBusy(!isBusy)}>Fix</button>
      <LoadingButton color="primary" progressprops={progressprops} isBusy={isBusy} onClick={()=>setBusy(!isBusy)}> DENEME </LoadingButton>
      </header>
    </div>
  );
}

export default App;
