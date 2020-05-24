import React,{useState} from 'react';
import './App.css';
import Deneme from 'deneme';
import {LoadingButton} from 'buttonloading'
import  LoginPanel  from  'loginpanel'

function App() {
  const progressprops = {color:"primary", size:24}
  const [isBusy,setBusy] = useState(true)
  const handleSubmit = event =>{
    event.preventDefault();
    console.log(event.target[0].value)
    console.log(event.target[2].value)
    console.log(event.target[5].checked)
    console.log(document.getElementById('username').value)
    console.log(document.getElementById('password').value)
    console.log(document.getElementById('rememberme').checked)
        console.log(event.target)  
    }
  return (
    <div className="App">
      <header className="App-header">
      <Deneme />
      <button onClick={()=>setBusy(!isBusy)}>Fix</button>
      <LoadingButton color="primary" progressprops={progressprops} isBusy={isBusy} onClick={()=>setBusy(!isBusy)}> DENEME </LoadingButton>
      </header>
      <LoginPanel  onSubmit={handleSubmit}  />
    </div>
  );
}

export default App;
