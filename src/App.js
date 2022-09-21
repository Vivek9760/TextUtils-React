// import logo from './logo.svg';
import React from 'react';
// import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/TextForm'
import {useState} from 'react'
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light');

  const[alert,setAlert]=useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
      setTimeout(()=>{
       setAlert(null);
      },2000);
}

  const toggleMode =() =>{
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor="#333333";
      showAlert("Dark mode has been enabled","success");
      // document.title="White";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","success");
      // document.title="Dark";
      }
      // else if(color === 'primary'){
      //   setMode("primary");
      //   document.body.style.backgroundColor="blue";
      //   showAlert("Blue mode has been enabled","success");
      //   // document.title="Blue";
      // }
  }
  return (
    <Router>
<Navbar mode={mode} toggleMode={toggleMode} title="TextUtils" aboutText="About Us" homeText="Home"></Navbar>
   <Alert alert={alert} />
   <div className='container'>
   <Routes>
          <Route exact path="/about" element={<About />} />
          
          <Route exact path="/" element={<Textform showAlert={showAlert} mode={mode} heading="Textarea" />}>
          </Route>
    </Routes> 
   </div>
    </Router>
  );
}

export default App;
