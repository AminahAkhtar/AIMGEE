
import './App.css';
import { useState,useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Motive from './components/Motive/Motive';
import Mission from './components/Mission/Mission';
import Collaboration from './components/Collaboration/Collaboration';
import ReactLoading from 'react-loading';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay for the loader

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
     {loading ? (
        <div className="loader">
          <ReactLoading type={'bars'} color={'#50C878'} height={100} width={100} />
          {/* <p>Loading...</p> */}
        </div>
      ) : (

   <div>
     <Navbar/>
     <About/>
     <Mission/>
     <Motive/>
     <Collaboration/>
    
    </div>

    )}

    </div>
  );
}

export default App;
