import NavProvider from './components/navbar/context/NavContext';
import Navs from './components/navbar/navs/Nav';
import Main from './pages/main';
import './App.css';
import { useState,useEffect } from 'react';
import { CircleLoader } from 'react-spinners';

function App() {
  const [loaded, setLoaded] = useState(false);
  
  //   the useEffect will run on the first rendering of the App component
  //   after two seconds (about how long it takes for the data to load)
  //   the loaded state will become true
    useEffect(() => {
     
      let timer = setTimeout(() => setLoaded(true), 2000);
      return () => {
        clearTimeout(timer);
      };
    }, []);
    console.log(loaded)
  return (
    <div className='appContainer'>
      {!loaded ? (
        <div style={{position:'fixed',top:'50%',left:'50%',transform:'translate(-50%, -50%)'}}>
                        <CircleLoader color={"#0d6efd"} loading={true}  size={100} />
          </div>

      ) : (
      
    <NavProvider>
    <Navs />
    <Main />
  </NavProvider>
      )}
      

  </div>
  );
}

export default App;
