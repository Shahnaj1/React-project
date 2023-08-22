// import React from 'react'
// import About2 from './component/About2.js';s
import Navbar from './component/Navebar.js';
import Textform1 from './component/textform1.js';

import React,{useState} from 'react';
import Alert from './component/Alert3.js';

export default function App(){ 
 const [mode,setMode]=useState('light');// wheather darkmode is enable or not
 const [alert, setAlert] = useState(null)
 
 const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
 }
 
 const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='black';
    showAlert(" Dark mode enabled","Success: ");
  }
  else{
    setMode('light'); 
    document.body.style.backgroundColor ='white';
    showAlert(" Light mode enabled","Success: ");
  }
 }
   return(
    <>
      
       <Navbar title="Home" mak="Content" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
       <Textform1 showAlert={showAlert} heading="Enter the text to analyse"  mode={mode} toggleMode={toggleMode}/>
       {/* <About2/> */}
       
        </>
   );
}







