
import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import { useState } from 'react/cjs/react.development';



function App() {
  const [mode, setMode] = useState('dark');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">

        <TextForm heading="Enter the text to Analyze" />

      </div>

    </>
  );
}

export default App;
