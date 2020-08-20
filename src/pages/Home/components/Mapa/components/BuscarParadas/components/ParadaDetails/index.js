import React from 'react';

export default function ParadaDetails(props){
    const {busca} = props;

    return(
        <div style={{marginTop: 10}}>{
        busca.codigo === 1 ?
        <p>Paradas por: {busca.input}</p>
        : busca.codigo === 2 ? 
        <p>Paradas por linha: {busca.input}</p>
        : <p>Paradas por corredor: {busca.input}</p>
        }
        </div>
    )
}