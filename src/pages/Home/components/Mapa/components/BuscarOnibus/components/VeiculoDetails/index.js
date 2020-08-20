import React, { useEffect, useState } from 'react';
import api from '../../../../../../../../services/api';

export default function VeiculoDetails(props) {
    const { linha, options, veiculoBuscado } = props;

    const [infos, setInfos] = useState(null);

    useEffect(() => {
         api.get("Posicao")
               .then(response => {
                    if(response.data){
                         response.data.l.forEach(item => {
                              if(item.cl == linha){
                                   setInfos(item);
                              }
                         });
                    }
                    
               })
    }, [veiculoBuscado])

    return (
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
           {infos && <>
               <strong>
               Letreiro: 
               </strong>
               {infos.c} <br/>
               <strong>
               Código identificador da linha: 
               </strong>
               {infos.cl} <br/>
               <strong>
                    Sentido: 
               </strong>
                    {infos.sl === 1 ? "Terminal Principal para Terminal Secundário" : "Terminal Secundário para Terminal Principal"}
                    <br/>
                    <strong>
                         Letreiro de destino da linha: 
                    </strong>
                    {infos.lt0}
                    <br/>
                    <strong>
                         Letreiro de origem da linha: 
                    </strong>
                    {infos.lt1}
                    <br/>
                    <strong>
                         Quantidade de veículos localizados: 
                    </strong>
                    {infos.qv}
                    <br/>
                    <hr/>
                    <h6>Última atualização: {veiculoBuscado.veiculos.hr}</h6>
               </>
               }
       </div>
    
    )
}