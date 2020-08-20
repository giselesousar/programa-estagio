import React from 'react';

export default function Details(props){

    const { resultados, options } = props;

    return(
        <div style={{
            marginTop: 20
       }}>
            <div style={{
                 display: "flex",
                 direction: "row",
                 justifyContent: "space-between"
            }}>
        <h4>Informações:</h4>
           {options}
           </div>
           <hr/>
           {resultados && <>
               <strong>
               Código da parada: 
               </strong>
               {resultados.p.cp} <br/>
               <strong>
               Nome da parada: 
               </strong>
               {resultados.p.np} <br/>
                <hr/>
                <h6>Última atualização: {resultados.hr}</h6>
               </>}
               </div>
    )
}