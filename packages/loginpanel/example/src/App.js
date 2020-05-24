import React, {useState} from 'react';

import LoginPanel from 'loginpanel'

const App = () => {
  const [isbusy,setBusy] = useState(false)
  const website={name:"website",url:"https://material-ui.com", copyrightvisible:false}
  
  const handleSubmit = event =>{
    event.preventDefault();
        setBusy(!isbusy)
        console.log(event)  
    }

  return <LoginPanel  website={website} avatar={{deneme:"deneme"}} isbusy={isbusy} onSubmit={handleSubmit}/>
}

export default App
