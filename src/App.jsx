import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png';

function App() {
  return (
    <div className="app-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt=""
        />
      </div>
    </div>
  );
}

export default App;
