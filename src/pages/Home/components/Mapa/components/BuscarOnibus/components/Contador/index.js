import React, {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';
import {FaRedo} from 'react-icons/fa';

export default function Contador(props){
    const { atualizarDados, atualizar, setAtualizar } = props;

    const [contador, setContador] = useState(30);

    function handleCounter(){
        if(contador === 0){
           handleAtualizar();
        }else{
            setContador(contador - 1);
        }
        
    }
    function handleAtualizar(){
        setAtualizar(true);
        setContador(30);
    }
    useEffect(() => {
        const interval = setInterval(handleCounter, 1000);
      return () => {
            clearInterval(interval);
        };
    }, [contador]);
    useEffect(() => {
        atualizarDados();
        setAtualizar(false);
    }, [atualizar])

    return(
        <div style={{
            display: "flex",
            direction: "row"
        }}>
            <h4 style={{
                margin: 5
            }}>{contador}</h4>
            <Button style={{
                margin: 5
            }} onClick={handleAtualizar} size="sm" variant="outline-success"><FaRedo/></Button>
        </div>
    )
}