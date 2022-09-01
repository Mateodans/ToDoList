import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png';
import ListaDeTareas from './componentes/listas';

function App() {
  return (
    <div className="app-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img
        className='freecodecamp-logo'
        src={freeCodeCampLogo}  alt="" />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
