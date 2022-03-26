import './App.css';

import Navbar from './components/navbar';
import Form from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';


function App() {
  const [mode,setMode] = useState('light') ;
  const [alert,setAlert] = useState('null')

  const showAlert = (type,message) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
     setAlert(null);
    },1500);

  }

  const toggleMode = () => {


    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor= '#203e5a' ;
      showAlert("Success","Dark mode has been enables");
    }
    else{

      setMode('light');
      document.body.style.backgroundColor= 'white' ;
      showAlert("Success","Light mode has been enables");

    }
  }
  return (
  
      <>
        < Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <Form heading="Enter You Text" mode={mode} showAlert={showAlert}/>
        
      </>
      
  )
}

    
  

export default App;
 