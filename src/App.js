import React, {useState, useEffect} from 'react';
import './App.css';
import Routes from './routes';
import api from './services/api';
import {PositionProvider} from './Providers/PositionProvider';


function App() {

  const [estaAutenticado, setEstaAutenticado] = useState(null);

  const [localizacao, setLocalizacao] = useState({
    marker: false,
    position:[]
  })

  useEffect(() => {
    api.post(`Login/Autenticar?token=${process.env.TOKEN}`)
      .then(response => {
          setEstaAutenticado(response.data);
      })
  }, [])

  return (
    <>
      {estaAutenticado === false ? 
        <h1>Problemas na autentificação. Recarregue a página!</h1> :
        <PositionProvider value={{localizacao, setLocalizacao}}> 
          <Routes/> 
        </PositionProvider>}
    </>
  );
}

export default App;
