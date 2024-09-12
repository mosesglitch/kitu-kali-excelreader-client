import { SiMicrosoftexcel } from "react-icons/si";
import './App.css';
import FileUpload from './components/FileUpload';
import { useState } from "react";

function App() {
  const [isLoading,setIsLoading]=useState(false)
  const getState=(loadstate)=>{
    setIsLoading(loadstate)
  }
  return (
    <div className="App">
      <header className="App-header">
        <SiMicrosoftexcel  className={`App-logo ${isLoading ? 'loadspin' : ''}`} alt="logo" />
        <div className='fileupload'>

        <FileUpload getState={getState}/>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
        
    </div>
  );
}

export default App;
