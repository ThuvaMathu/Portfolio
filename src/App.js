import NavProvider from './components/navbar/context/NavContext';
import Navs from './components/navbar/navs/Nav';
import Main from './pages/main';
import './App.css';

function App() {
  return (
    <div className='appContainer'>
    <NavProvider>
      <Navs />
      <Main />
    </NavProvider>
  </div>
  );
}

export default App;
